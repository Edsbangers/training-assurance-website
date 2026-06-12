import { render, screen, fireEvent } from "@testing-library/react";
import ServicesGrid from "@/components/ServicesGrid";

describe("ServicesGrid", () => {
  it("renders all service cards", () => {
    render(<ServicesGrid />);

    expect(screen.getByText("ISO 27001 Consultancy")).toBeInTheDocument();
    expect(screen.getByText("ISO 9001 Consultancy")).toBeInTheDocument();
    expect(screen.getByText("ISO 14001 Consultancy")).toBeInTheDocument();
    expect(screen.getByText("ISO 45001 Consultancy")).toBeInTheDocument();
    expect(
      screen.getByText("Audit Preparation & Internal Audits")
    ).toBeInTheDocument();
    expect(
      screen.getByText("ISO Gap Analysis & Implementation")
    ).toBeInTheDocument();
    expect(screen.getByText("ISO/IEC 42001 AI Management")).toBeInTheDocument();
  });

  it("leads with ISO 27001 as the first service", () => {
    render(<ServicesGrid />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings[0]).toHaveTextContent("ISO 27001 Consultancy");
  });

  it("expands a consultancy card on click", () => {
    render(<ServicesGrid />);

    // ISO 27001 has its own page link ("View details"); the remaining
    // six cards are expandable and show "Learn more".
    const learnMoreButtons = screen.getAllByText("Learn more");
    expect(learnMoreButtons.length).toBe(6);

    const title = screen.getByText("ISO 9001 Consultancy");
    const card = title.closest("div[class*='cursor-pointer']");
    expect(card).toBeInTheDocument();

    fireEvent.click(card!);

    expect(screen.getByText("Show less")).toBeInTheDocument();
  });

  it("displays correct descriptions for each service", () => {
    render(<ServicesGrid />);

    expect(screen.getByText(/Our lead standard/i)).toBeInTheDocument();
    expect(
      screen.getByText(/specialist service under our ISO consultancy umbrella/i)
    ).toBeInTheDocument();
  });

  it("collapses card when clicking again", () => {
    render(<ServicesGrid />);

    const title = screen.getByText("ISO 9001 Consultancy");
    const card = title.closest("div[class*='cursor-pointer']");

    fireEvent.click(card!);
    expect(screen.getByText("Show less")).toBeInTheDocument();

    fireEvent.click(card!);

    const learnMoreButtons = screen.getAllByText("Learn more");
    expect(learnMoreButtons.length).toBe(6);
  });

  it("links ISO 27001 to its dedicated page", () => {
    render(<ServicesGrid />);
    const detailsLink = screen.getByText("View details").closest("a");
    expect(detailsLink).toHaveAttribute("href", "/iso-27001-consultancy");
  });
});
