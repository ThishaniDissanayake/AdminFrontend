import React from "react";

export function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full border border-gray-300">{children}</table>;
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100 border-b">{children}</thead>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b border-gray-300">{children}</tr>;
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="p-3 text-left">{children}</td>;
}
