import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
