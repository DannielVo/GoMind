"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import MaterialIcon from "@/components/common/MaterialIcon";
import { guideSections, type GuideSectionId } from "./guide-data";

export default function GuideTableOfContents() {
  const [activeId, setActiveId] = useState<GuideSectionId>("section-01");

  const activeIdRef = useRef<GuideSectionId>("section-01");
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = guideSections.map(({ id }) => document.getElementById(id));

    let animationFrame: number | null = null;

    function updateActiveSection() {
      animationFrame = null;

      const mobileBarHeight =
        mobileBarRef.current?.getBoundingClientRect().height ?? 0;

      const readingLine = 80 + mobileBarHeight + 20;

      let nextId: GuideSectionId = guideSections[0].id;

      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= readingLine) {
          nextId = guideSections[index].id;
        }
      });

      if (activeIdRef.current !== nextId) {
        activeIdRef.current = nextId;
        setActiveId(nextId);
      }
    }

    function scheduleUpdate() {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    }

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    const content = document.getElementById("guide-content");

    if (content) {
      resizeObserver.observe(content);
    }

    if (mobileBarRef.current) {
      resizeObserver.observe(mobileBarRef.current);
    }

    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);

      resizeObserver.disconnect();

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const nav = mobileNavRef.current;
    const activeLink = nav?.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`,
    );

    if (!nav || !activeLink) {
      return;
    }

    const linkLeft = activeLink.offsetLeft;
    const linkRight = linkLeft + activeLink.offsetWidth;
    const visibleLeft = nav.scrollLeft;
    const visibleRight = visibleLeft + nav.clientWidth;

    if (linkLeft < visibleLeft || linkRight > visibleRight) {
      nav.scrollLeft =
        linkLeft - nav.clientWidth / 2 + activeLink.offsetWidth / 2;
    }
  }, [activeId]);

  function navigateToSection(
    event: MouseEvent<HTMLAnchorElement>,
    id: GuideSectionId,
  ) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();

    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }

    const mobileBarHeight =
      mobileBarRef.current?.getBoundingClientRect().height ?? 0;

    const offset = 80 + mobileBarHeight + 16;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.focus({ preventScroll: true });

    window.scrollTo({
      top: window.scrollY + target.getBoundingClientRect().top - offset,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  function renderLinks(mobile: boolean) {
    return guideSections.map((section, index) => {
      const active = activeId === section.id;

      return (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(event) => navigateToSection(event, section.id)}
          aria-current={active ? "location" : undefined}
          className={[
            "flex min-h-11 items-center gap-2 px-3 py-2 text-sm",
            "transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2",
            "focus-visible:outline-primary-hover",
            mobile
              ? "shrink-0 rounded-full whitespace-nowrap"
              : "justify-between rounded-lg",
            active
              ? "bg-primary-light font-semibold text-primary-hover"
              : "font-medium text-text-secondary hover:bg-bg-secondary hover:text-primary-hover",
          ].join(" ")}
        >
          <span className="flex items-center gap-2">
            <span className="text-xs font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>

            {mobile ? section.shortTitle : section.title}
          </span>

          {!mobile && (
            <span
              aria-hidden="true"
              className={[
                "h-1.5 w-1.5 shrink-0 rounded-full bg-primary",
                active ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          )}
        </a>
      );
    });
  }

  return (
    <div className="sticky top-20 z-30 min-w-0 self-start lg:top-24 lg:z-10">
      <div
        ref={mobileBarRef}
        className="-mx-4 bg-bg-primary/95 px-4 py-2.5 shadow-sm sm:mx-0 sm:rounded-xl lg:hidden"
      >
        <nav
          ref={mobileNavRef}
          aria-label="Guide contents on mobile"
          className="relative flex items-center gap-2 overflow-x-auto px-1 py-1"
        >
          {renderLinks(true)}
        </nav>
      </div>

      <aside className="hidden max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-xl border border-border bg-surface p-5 shadow-sm lg:block">
        <div className="mb-3 flex items-center justify-between gap-2 border-b border-border pb-3">
          <h2 className="text-xs font-bold text-text-secondary uppercase">
            Contents
          </h2>
        </div>

        <nav aria-label="Guide contents" className="flex flex-col gap-1">
          {renderLinks(false)}
        </nav>
      </aside>
    </div>
  );
}
