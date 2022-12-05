import dayjs from "dayjs";
import { TimeInput } from "@mantine/dates";
import { useMemo, useState } from "react";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export default function Home() {
  const [startDate, setStartDate] = useState(dayjs().toDate());
  const [endDate, setEndDate] = useState(dayjs().add(2, "hours").toDate());

  const ecart = dayjs(startDate).diff(dayjs(endDate));

  const formattedStartDate = useMemo(
    () => dayjs(startDate).format("HH:mm") || "?",
    [startDate]
  );
  const formattedEndDate = useMemo(
    () => dayjs(endDate).format("HH:mm") || "?",
    [endDate]
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Il est {dayjs().format("HH:MM")}</h1>
      <div style={{ maxWidth: "50%", margin: "auto" }}>
        <p>Heure début</p>
        <TimeInput value={startDate} onChange={setStartDate} />
        <p>Heure fin</p>
        <TimeInput value={endDate} onChange={setEndDate} />
      </div>

      <h2 style={{ textAlign: "center" }}>
        Entre {formattedStartDate} et {formattedEndDate} il y a un écart de{" "}
        {dayjs.duration(dayjs(endDate).diff(dayjs(startDate))).format("HH:mm")}
      </h2>
    </div>
  );
}
