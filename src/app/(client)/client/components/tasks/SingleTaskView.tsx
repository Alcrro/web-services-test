"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface MyCustomTooltipParams {
  value: [number, number, number];
  // optionally add other props you use
  seriesIndex: number;
  seriesName: string;
  dataIndex: number;
}

const EChartsReactNoSSR = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

const now = Date.now();
const tasks = [
  {
    name: "Task A",
    start: now - 10000 * 60 * 10,
    end: now + 1000 * 60 * 50,
    subTasks: [
      {
        name: "A1",
        start: now - 10000 * 60 * 10,
        end: now + 1000 * 60 * 10,
      },
      {
        name: "A2",
        start: new Date("2025-12-01T09:30").getTime(),
        end: new Date("2025-12-01T12:00").getTime(),
      },
    ],
  },
  {
    name: "Task B",
    start: new Date("2025-12-01T09:00").getTime(),
    end: new Date("2025-12-01T14:00").getTime(),
    subTasks: [
      {
        name: "B1",
        start: new Date("2025-12-01T09:00").getTime(),
        end: new Date("2025-12-01T11:00").getTime(),
      },
      {
        name: "B2",
        start: new Date("2025-12-01T11:00").getTime(),
        end: new Date("2025-12-01T14:00").getTime(),
      },
    ],
  },
];

export default function SingleTaskView({ taskId }: { taskId: string }) {
  const [progressData, setProgressData] = useState(
    tasks.flatMap((task, taskIdx) =>
      task.subTasks.map((sub, subIdx) => ({
        taskIndex: taskIdx,
        subIndex: subIdx,
        start: sub.start,
        end: sub.end,
        progress: 0,
      }))
    )
  );

  // Update progress every second
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressData((prev) =>
        prev.map((t) => {
          const now = Date.now();
          const total = t.end - t.start;
          const elapsed = now < t.start ? 0 : Math.min(now - t.start, total);
          const progress = elapsed / total;

          return { ...t, progress };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ============================================
  // Chart option (dynamic progress)
  // ============================================

  const option = {
    animation: false,

    grid: {
      left: 120,
      right: 40,
      top: 20,
      bottom: 40,
    },

    xAxis: {
      type: "time",
      min: Math.min(...tasks.map((t) => t.start)) - 3600000,
      max: Math.max(...tasks.map((t) => t.end)) + 3600000,
    },

    yAxis: {
      type: "category",
      data: tasks
        .flatMap((t) => t.subTasks.map((s) => `${t.name} – ${s.name}`))
        .reverse(),
    },

    tooltip: {
      formatter: (p: MyCustomTooltipParams) => {
        const pd = progressData[p.value[0]];
        const task = tasks[pd.taskIndex];
        const sub = task.subTasks[pd.subIndex];

        return `
            ${task.name} – ${sub.name}<br>
            Start: ${new Date(sub.start).toLocaleTimeString()}<br>
            End: ${new Date(sub.end).toLocaleTimeString()}<br>
            Progress: ${(pd.progress * 100).toFixed(0)}%
          `;
      },
    },

    series: [
      {
        type: "custom",
        renderItem: (api: echarts.CustomSeriesRenderItemAPI) => {
          const idx = api.value(0);
          const start = api.value(1);
          const end = api.value(2);
          const y = api.coord([0, idx])[1];
          const xStart = api.coord([start, 0])[0];
          const xEnd = api.coord([end, 0])[0];
          const height = 12;

          return {
            type: "rect",
            shape: {
              x: xStart,
              y: y - height / 2,
              width: xEnd - xStart,
              height,
              r: 4,
            },
            style: { fill: "#dcdcdc" },
          };
        },
        data: [...progressData]
          .reverse()
          .map((t, idx) => [idx, t.start, t.end]),
      },
      {
        type: "custom",
        renderItem: (api: echarts.CustomSeriesRenderItemAPI) => {
          const idx = Number(api.value(0));
          const start = Number(api.value(1));
          const end = Number(api.value(2));
          const progress = [...progressData].reverse()[idx].progress;
          const progressEnd = start + (end - start) * progress;
          const y = api.coord([0, idx])[1];
          const xStart = api.coord([start, 0])[0];
          const xEnd = api.coord([progressEnd, 0])[0];
          const height = 12;

          return {
            type: "rect",
            shape: {
              x: xStart,
              y: y - height / 2,
              width: xEnd - xStart,
              height,
              r: 4,
            },
            style: { fill: "#4caf50" },
          };
        },
        data: [...progressData]
          .reverse()
          .map((t, idx) => [idx, t.start, t.end]),
      },
    ],
  };

  return (
    <div>
      <h3>SingleTaskView – {taskId}</h3>
      <EChartsReactNoSSR option={option} style={{ height: "320px" }} />
    </div>
  );
}
