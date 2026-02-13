"use client";
import PerformanceCard from "../performance-card";
import StateManagementCard from "../state-management-card";
import MobileDesignCard from "../mobile-design-card";
import APIFlowCard from "../api-flow-card";
import SecurityCard from "../security-card";

export default function BentoDemo() {
  return (
    <section id="skills" className="md:grid md:grid-cols-3 md:gap-3 px-6 py-24">
      <div className="flex flex-col gap-3">
        <PerformanceCard />
        <APIFlowCard />
      </div>
      <StateManagementCard />
      <div className="flex flex-col gap-3">
        <MobileDesignCard />
        <SecurityCard />
      </div>
    </section>
  );
}
