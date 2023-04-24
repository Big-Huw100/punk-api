import { render, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  const setSearchInput = jest.fn();
  const setHighAbv = jest.fn();
  const setBeerAge = jest.fn();
  const setAcidity = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByLabelText, getByText } = render(
      <NavBar
        setSearchInput={setSearchInput}
        highAbv={false}
        setHighAbv={setHighAbv}
        beerAge={false}
        setBeerAge={setBeerAge}
        acidity={false}
        setAcidity={setAcidity}
      />
    );

    expect(getByText("High ABV (6.0% or higher)")).toBeInTheDocument();
    expect(getByText("Classic Range")).toBeInTheDocument();
    expect(getByText("Acidic (ph 4 or higher)")).toBeInTheDocument();
    expect(getByLabelText("High ABV (6.0% or higher)")).not.toBeChecked();
    expect(getByLabelText("Classic Range")).not.toBeChecked();
    expect(getByLabelText("Acidic (ph 4 or higher)")).not.toBeChecked();
  });

  it("handles 'High ABV' checkbox change", () => {
    const { getByLabelText } = render(
      <NavBar
        setSearchInput={setSearchInput}
        highAbv={false}
        setHighAbv={setHighAbv}
        beerAge={false}
        setBeerAge={setBeerAge}
        acidity={false}
        setAcidity={setAcidity}
      />
    );

    fireEvent.click(getByLabelText("High ABV (6.0% or higher)"));
    expect(setHighAbv).toHaveBeenCalledWith(true);
  });

  it("handles 'Classic Range' checkbox change", () => {
    const { getByLabelText } = render(
      <NavBar
        setSearchInput={setSearchInput}
        highAbv={false}
        setHighAbv={setHighAbv}
        beerAge={false}
        setBeerAge={setBeerAge}
        acidity={false}
        setAcidity={setAcidity}
      />
    );

    fireEvent.click(getByLabelText("Classic Range"));
    expect(setBeerAge).toHaveBeenCalledWith(true);
  });

  it("handles 'Acidic' checkbox change", () => {
    const { getByLabelText } = render(
      <NavBar
        setSearchInput={setSearchInput}
        highAbv={false}
        setHighAbv={setHighAbv}
        beerAge={false}
        setBeerAge={setBeerAge}
        acidity={false}
        setAcidity={setAcidity}
      />
    );

    fireEvent.click(getByLabelText("Acidic (ph 4 or higher)"));
    expect(setAcidity).toHaveBeenCalledWith(true);
  });
});
