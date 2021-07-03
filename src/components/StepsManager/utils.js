export function saveLocalData(data) {
  const json = JSON.stringify(data);
  localStorage.setItem('steps-manager', json);
}

export function loadLocalData() {
  const json = localStorage.getItem('steps-manager');
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function sortRecordsByDate(data) {
  return data.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date === b.date) return 0;
    if (a.date > b.date) return -1;
  });
}