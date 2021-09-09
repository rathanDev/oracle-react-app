export const formatDate = (epoch) => {
    const date = new Date(epoch);
    const y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const m = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
    const d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${y}-${m}-${d}`;
  };