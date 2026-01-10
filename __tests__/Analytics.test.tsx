import { render } from "@testing-library/react";
import Analytics from "@/components/Analytics";

// Mock next/script
jest.mock("next/script", () => {
  return function MockScript({ children, id }: { children?: string; id?: string }) {
    return <script data-testid={id}>{children}</script>;
  };
});

describe("Analytics", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("renders nothing when no measurement ID is provided", () => {
    delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const { container } = render(<Analytics />);
    expect(container.firstChild).toBeNull();
  });

  it("renders scripts when measurement ID is provided via prop", () => {
    const { container } = render(<Analytics measurementId="G-TEST123" />);
    expect(container.innerHTML).toContain("G-TEST123");
  });

  it("renders scripts when measurement ID is provided via env", () => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-ENV123";
    const { container } = render(<Analytics />);
    expect(container.innerHTML).toContain("G-ENV123");
  });
});
