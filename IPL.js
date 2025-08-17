function submitPoll(event) {
  event.preventDefault();
  const selected = document.querySelector('input[name="player"]:checked');
  const result = document.getElementById("poll-result");

  if (selected) {
    result.innerHTML = `<p>Thank you for voting for <strong>${selected.value}</strong>!</p>`;
  } else {
    result.innerHTML = "<p>Please select a player to vote.</p>";
  }
}
