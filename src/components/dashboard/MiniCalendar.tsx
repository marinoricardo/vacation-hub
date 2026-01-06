import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

// Mock calendar data
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
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
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
      <div className="grid grid-cols-7 gap-1">
        {calendarData.map((item, i) => (
          <div
            key={i}
            className={cn(
              "calendar-day",
              item.day && "hover:bg-muted cursor-pointer",
              item.type === "today" && "calendar-day-today",
              item.type === "vacation" && "calendar-day-vacation",
              item.type === "pending" && "calendar-day-pending",
              !item.day && "text-transparent"
            )}
          >
            {item.day || "0"}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-6 pt-4 border-t">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Hoje</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-xs text-muted-foreground">Férias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pending" />
          <span className="text-xs text-muted-foreground">Pendente</span>
        </div>
      </div>
    </div>
  );
}
