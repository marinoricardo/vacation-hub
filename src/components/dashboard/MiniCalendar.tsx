import { cn } from "@/lib/utils";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const calendarData = [
  { day: null }, { day: null }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
  { day: 6, type: "today" }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
  { day: 13 }, { day: 14 }, { day: 15, type: "vacation" }, { day: 16, type: "vacation" }, { day: 17, type: "vacation" }, { day: 18, type: "vacation" }, { day: 19, type: "vacation" },
  { day: 20, type: "vacation" }, { day: 21, type: "vacation" }, { day: 22, type: "vacation" }, { day: 23 }, { day: 24 }, { day: 25, type: "pending" }, { day: 26, type: "pending" },
  { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }, { day: null }, { day: null },
];

export function MiniCalendar() {
  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-foreground">Janeiro 2025</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <button className="px-2 py-1 hover:bg-muted rounded transition-colors">←</button>
          <button className="px-2 py-1 hover:bg-muted rounded transition-colors">→</button>
        </div>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, i) => (
          <div key={i} className="text-center text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {calendarData.map((item, i) => (
          <div
            key={i}
            className={cn(
              "h-9 flex items-center justify-center rounded-md text-sm transition-colors",
              !item.day && "text-transparent",
              item.type === "today" && "bg-primary text-primary-foreground font-semibold",
              item.type === "vacation" && "bg-success/10 text-success font-medium",
              item.type === "pending" && "bg-muted text-muted-foreground font-medium",
              item.day && !item.type && "hover:bg-muted/50 cursor-pointer"
            )}
          >
            {item.day || ""}
          </div>
        ))}
      </div>

      {/* Legend - simplified */}
      <div className="flex items-center gap-6 mt-6 pt-4 border-t text-xs text-muted-foreground">
        <span><span className="inline-block w-2 h-2 rounded-full bg-primary mr-1.5" />Hoje</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-success mr-1.5" />Férias</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-muted-foreground mr-1.5" />Pendente</span>
      </div>
    </div>
  );
}
