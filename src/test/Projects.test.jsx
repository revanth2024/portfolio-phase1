import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "../components/sections/Projects/Projects";
import { projects } from "../components/sections/Projects/projectData";

describe("projects section", () => {
  it("renders all portfolio projects and the Service Connect UI preview", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /selected projects/i }),
    ).toBeInTheDocument();
    expect(projects).toHaveLength(14);
    expect(projects[0].sliderImg).toHaveLength(9);
    expect(projects.filter((project) => project.category === "web-app")).toHaveLength(7);
    expect(projects.filter((project) => project.category === "website")).toHaveLength(7);
    expect(
      projects
        .filter((project) => project.category === "web-app")
        .map((project) => project.name),
    ).toEqual([
      "Service Connect - Automotive Service System",
      "Zenthi - Healthcare & Wellness Application",
      "Collman - Banking & Financial Management System",
      "MeatZone - B2B Meat Ordering & Management Platform",
      "Task Management Application",
      "Instagram Chat App Clone",
      "Employee Management Application",
    ]);
    expect(
      projects
        .filter((project) => project.category === "web-app")
        .every(
          (project) =>
            Boolean(project.img) &&
            project.sliderImg.length > 0 &&
            project.sliderImg.every(Boolean),
        ),
    ).toBe(true);

    const serviceConnectTitle = screen.getByRole("heading", {
      name: "Service Connect - Automotive Service System",
    });
    const serviceConnectCard = serviceConnectTitle.closest(".project-card");

    expect(serviceConnectCard).not.toBeNull();
    fireEvent.click(
      within(serviceConnectCard).getByRole("button", {
        name: /view ui preview/i,
      }),
    );

    expect(
      screen.getByText(/responsive automotive service platform/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      within(screen.getByRole("dialog")).queryByRole("link", {
        name: /view live/i,
      }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    const websitesTab = screen.getByRole("tab", { name: /websites/i });
    fireEvent.click(websitesTab);
    expect(
      screen.getByRole("heading", { name: "Best Gents Hostel Website" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "Service Connect - Automotive Service System",
      }),
    ).not.toBeInTheDocument();

    fireEvent.keyDown(websitesTab, { key: "ArrowLeft" });
    expect(
      screen.getByRole("tab", { name: /web applications/i }),
    ).toHaveAttribute("aria-selected", "true");
  });
});
