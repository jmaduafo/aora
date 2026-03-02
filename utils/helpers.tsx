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

export function getFullName(first_name: string, last_name: string) {
  return (
    first_name.charAt(0).toUpperCase() +
    first_name.slice(1).toLowerCase() +
    " " +
    last_name.charAt(0).toUpperCase() +
    last_name.slice(1).toLowerCase()
  );
}

export function averageRating(ratings: number[]) {
  let total = 0

  ratings.forEach(rating => {
    total += rating
  })

  return total / ratings.length
}

export function ratingRanking(ratings: number[]) {
  const rank: any[] = []

  // ORGANIZE FOR THE RATINGS TO BE AN ARRAY OF { RATING: NUMBER, COUNT: NUMBER}
  Array.from({ length: 5 }).forEach((_, i) => {
    rank.push({ rating: 5 - i, count: 0})
  })

  // LOOP THROUGH RATINGS ARRAY AND COUNT BASED ON HOW MANY TIMES
  // THE RATING APPEARS
  ratings.forEach(rating => {
    const rankIndex = rank.findIndex(item => item.rating === rating)

    if (rankIndex === -1) {
      rank.push({ rating, count: 1 })
    }

    rank[rankIndex].count++
  })

  const rankPercent: any[] = []

  // CALCULATE THE PERCENT OF EACH RATING
  rank.forEach(item => {
    rankPercent.push({...item, percent: Math.floor(item.count / ratings.length) * 100})
  })

  return rankPercent
}
