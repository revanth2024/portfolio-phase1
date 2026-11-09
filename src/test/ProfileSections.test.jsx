import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Education from "../components/sections/Education/Education";
import Experience from "../components/sections/Experience/Experience";
import Recognition from "../components/sections/Recognition/Recognition";
import Skills from "../components/sections/Skills/Skills";

describe("profile sections", () => {
  it("shows separate experience and education details", () => {
    render(
      <>
        <Experience />
        <Education />
      </>,
    );

    expect(
      screen.getByRole("heading", { name: /professional experience/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("1 year 8 months")).toBeInTheDocument();
    expect(screen.getByText("1 year 4 months")).toBeInTheDocument();
    expect(
      screen.getByText(/distance education/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(
      screen.getByRole("article", {
        current: "step",
      }),
    ).toHaveTextContent(/master of computer applications/i);
    expect(
      screen.getAllByText("ICI Govt Boys Hr. Sec. School"),
    ).toHaveLength(2);
    expect(screen.getByText(/2013 – 2015/)).toBeInTheDocument();
  });

  it("includes deployment skills and both award recognitions", () => {
    render(
      <>
        <Skills />
        <Recognition />
      </>,
    );

    expect(screen.getByText("Deployment")).toBeInTheDocument();
    expect(screen.getByText("Vercel")).toBeInTheDocument();
    expect(screen.getAllByText("Firebase")).not.toHaveLength(0);
    expect(screen.getByText("Hostinger")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Best Developer Award")).toBeInTheDocument();
    expect(screen.getByText("Technical Excellence Award")).toBeInTheDocument();
    expect(
      screen.getByAltText(/gsus star software solutions award ceremony/i),
    ).toBeInTheDocument();
  });
});
