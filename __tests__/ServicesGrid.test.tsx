import { render, screen, fireEvent } from "@testing-library/react";
import ServicesGrid from "@/components/ServicesGrid";

describe("ServicesGrid", () => {
  it("renders all service cards", () => {
    render(<ServicesGrid />);

    expect(screen.getByText("AI Audits & Governance")).toBeInTheDocument();
    expect(screen.getByText("PICMS Platform")).toBeInTheDocument();
    expect(screen.getByText("ISO 9001")).toBeInTheDocument();
    expect(screen.getByText("ISO 45001")).toBeInTheDocument();
    expect(screen.getByText("ISO 14001")).toBeInTheDocument();
    expect(screen.getByText("ISO 27001")).toBeInTheDocument();
  });

  it("expands service card on click", () => {
    render(<ServicesGrid />);

    // Initially, all cards show "Learn more"
    const learnMoreButtons = screen.getAllByText("Learn more");
    expect(learnMoreButtons.length).toBe(6);

    // Find the AI Audits card and click it
    const aiAuditTitle = screen.getByText("AI Audits & Governance");
    const aiAuditCard = aiAuditTitle.closest("div[class*='cursor-pointer']");
    expect(aiAuditCard).toBeInTheDocument();

    fireEvent.click(aiAuditCard!);

    // After clicking, "Show less" should appear
    expect(screen.getByText("Show less")).toBeInTheDocument();
  });

  it("displays correct descriptions for each service", () => {
    render(<ServicesGrid />);

    expect(
      screen.getByText(/Comprehensive auditing of AI systems/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our flagship SaaS platform/i)
    ).toBeInTheDocument();
  });

  it("collapses card when clicking again", () => {
    render(<ServicesGrid />);

    const aiAuditTitle = screen.getByText("AI Audits & Governance");
    const aiAuditCard = aiAuditTitle.closest("div[class*='cursor-pointer']");

    // Click to expand
    fireEvent.click(aiAuditCard!);
    expect(screen.getByText("Show less")).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(aiAuditCard!);

    // Should show "Learn more" again for all cards
    const learnMoreButtons = screen.getAllByText("Learn more");
    expect(learnMoreButtons.length).toBe(6);
  });
});
