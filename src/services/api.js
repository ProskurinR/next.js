export async function getRestaurants() {
  try {
    const result = await fetch("http://localhost:3001/api/restaurants", {
      next: { revalidate: 60 },
    });
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}

export async function getRestaurantById(restaurantId) {
  try {
    const result = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
      {
        next: { revalidate: 60 },
      }
    );
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}

export async function getDishes(restaurantId) {
  try {
    const result = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      {
        next: { revalidate: 60 },
      }
    );
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}

export async function getDishById(dishId) {
  try {
    const result = await fetch(`http://localhost:3001/api/dish/${dishId}`, {
      next: { revalidate: 60 },
    });
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}

export async function getReviews(restaurantId) {
  try {
    const result = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
      {
        cache: "no-cache",
      }
    );
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}

export async function getUsers() {
  try {
    const result = await fetch("http://localhost:3001/api/users", {
      next: { revalidate: 60 },
    });
    return result.json();
  } catch (error) {
    console.log("Возникла проблема с запросом: ", error.message);
  }
}
