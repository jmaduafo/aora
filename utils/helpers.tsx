import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";

export function createSlug(text: string) {
  return text.split(" ").join("-").toLowerCase();
}

export function deSlug(text: string) {
  return text.split("-").join(" ").toLowerCase();
}

export function checkForS(num: number) {
  return num === 1 ? "" : "s";
}

export function cartSum(cart: number[]) {
  let total = 0;

  cart.forEach((num) => {
    total += num;
  });

  return total;
}

export function formatText(text: string) {
  if (text.toLowerCase().includes("age")) {
    if (text.includes("PLUS")) {
      return text.split("_").slice(-2).join("").replace("PLUS", "+");
    }

    return text.split("_").slice(-2).join(" - ");
  }

  return text.split("_").join(" ");
}

export function getRating(rating: number, size: string) {
  const split = rating.toFixed(2).split(".");

  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: +split[0] }).map((_, i) => {
        return (
          <Fragment key={`item-${i + 1}`}>
            <FaStar className={size} />
          </Fragment>
        );
      })}
      {+split[1] >= 50 && <FaStarHalf className={size} />}
    </div>
  );
}
