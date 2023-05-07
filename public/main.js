let btn = document.querySelectorAll("#delete");
let update = document.querySelectorAll("#update");

Array.from(btn).forEach((element) => {
  element.addEventListener("click", () => {
    fetch("delete", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: element.dataset.id,
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

Array.from(update).forEach((element) => {
  element.addEventListener("click", () => {
    const itemId = element.dataset.id;
    const newAmountInput = document.querySelector(
      `#newAmount[data-id="${itemId}"]`
    );

    if (newAmountInput.classList.contains("hidden")) {
      // Unhide the input field
      newAmountInput.classList.remove("hidden");
      newAmountInput.focus();
    } else {
      // Perform the fetch request
      const newAmount = newAmountInput.value;

      if (newAmount && !isNaN(newAmount)) {
        // Fetch request to update the amount
        fetch("/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: itemId,
            amount: newAmount,
          }),
        }).then(function (response) {
          window.location.reload();
        });
      }
    }
  });
});

function updateItem(event) {
  const updateButton = event.target;
  const itemId = updateButton.dataset.id;
  const newAmountInput = document.querySelector(
    `#newAmount[data-id="${itemId}"]`
  );

  if (newAmountInput.classList.contains("hidden")) {
    // Unhide the input field
    newAmountInput.classList.remove("hidden");
    newAmountInput.focus();
  } else {
    // Perform the fetch request
    const newAmount = newAmountInput.value;

    if (newAmount && !isNaN(newAmount)) {
      // Fetch request to update the amount
      fetch("/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: itemId,
          amount: newAmount,
        }),
      }).then(function (response) {
        window.location.reload();
      });
    }
  }
}
