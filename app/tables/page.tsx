"use client";

import React, { useState, useMemo, useEffect } from "react";
import { CaretUp, CaretDown, DotsThree, CaretLeft, CaretRight, PencilSimple, Copy, Trash, Check } from "@phosphor-icons/react";

// ============================================
// DATA SETS
// ============================================

interface ProductRow {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: string;
}

interface CustomerRow {
    id: number;
    name: string;
    email: string;
    location: string;
    tier: string;
    orders: number;
}

interface OrderRow {
    id: number;
    orderNumber: string;
    customer: string;
    product: string;
    amount: number;
    status: string;
    date: string;
}

const productsData: ProductRow[] = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 129.99, stock: 45, status: "In Stock" },
    { id: 2, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 120, status: "In Stock" },
    { id: 3, name: "Coffee Maker", category: "Appliances", price: 89.99, stock: 0, status: "Out of Stock" },
    { id: 4, name: "Running Shoes", category: "Footwear", price: 119.99, stock: 67, status: "In Stock" },
    { id: 5, name: "Desk Lamp", category: "Furniture", price: 45.99, stock: 23, status: "In Stock" },
    { id: 6, name: "Water Bottle", category: "Accessories", price: 19.99, stock: 200, status: "In Stock" },
    { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: 79.99, stock: 5, status: "Low Stock" },
    { id: 8, name: "Notebook Set", category: "Stationery", price: 12.99, stock: 150, status: "In Stock" },
];

const customersData: CustomerRow[] = [
    { id: 1, name: "Sarah Chen", email: "sarah.chen@email.com", location: "San Francisco", tier: "Gold", orders: 24 },
    { id: 2, name: "Michael Torres", email: "m.torres@email.com", location: "Austin", tier: "Silver", orders: 12 },
    { id: 3, name: "Emma Wilson", email: "emma.w@email.com", location: "Seattle", tier: "Platinum", orders: 45 },
    { id: 4, name: "James Park", email: "jpark@email.com", location: "Boston", tier: "Bronze", orders: 3 },
    { id: 5, name: "Olivia Martinez", email: "olivia.m@email.com", location: "Denver", tier: "Gold", orders: 18 },
    { id: 6, name: "Liam Anderson", email: "liam.a@email.com", location: "Portland", tier: "Silver", orders: 9 },
    { id: 7, name: "Sophia Rodriguez", email: "sophia.r@email.com", location: "Miami", tier: "Platinum", orders: 52 },
    { id: 8, name: "Noah Thompson", email: "noah.t@email.com", location: "Chicago", tier: "Bronze", orders: 6 },
];

const ordersData: OrderRow[] = [
    { id: 1, orderNumber: "ORD-1001", customer: "Sarah Chen", product: "Wireless Headphones", amount: 129.99, status: "Delivered", date: "2024-01-15" },
    { id: 2, orderNumber: "ORD-1002", customer: "Michael Torres", product: "Yoga Mat", amount: 29.99, status: "Shipped", date: "2024-01-16" },
    { id: 3, orderNumber: "ORD-1003", customer: "Emma Wilson", product: "Coffee Maker", amount: 89.99, status: "Processing", date: "2024-01-17" },
    { id: 4, orderNumber: "ORD-1004", customer: "James Park", product: "Running Shoes", amount: 119.99, status: "Delivered", date: "2024-01-18" },
    { id: 5, orderNumber: "ORD-1005", customer: "Olivia Martinez", product: "Desk Lamp", amount: 45.99, status: "Cancelled", date: "2024-01-19" },
    { id: 6, orderNumber: "ORD-1006", customer: "Liam Anderson", product: "Water Bottle", amount: 19.99, status: "Delivered", date: "2024-01-20" },
    { id: 7, orderNumber: "ORD-1007", customer: "Sophia Rodriguez", product: "Bluetooth Speaker", amount: 79.99, status: "Shipped", date: "2024-01-21" },
    { id: 8, orderNumber: "ORD-1008", customer: "Noah Thompson", product: "Notebook Set", amount: 12.99, status: "Processing", date: "2024-01-22" },
    { id: 9, orderNumber: "ORD-1009", customer: "Sarah Chen", product: "Yoga Mat", amount: 29.99, status: "Delivered", date: "2024-01-23" },
    { id: 10, orderNumber: "ORD-1010", customer: "Emma Wilson", product: "Running Shoes", amount: 119.99, status: "Shipped", date: "2024-01-24" },
    { id: 11, orderNumber: "ORD-1011", customer: "Michael Torres", product: "Desk Lamp", amount: 45.99, status: "Delivered", date: "2024-01-25" },
    { id: 12, orderNumber: "ORD-1012", customer: "Olivia Martinez", product: "Wireless Headphones", amount: 129.99, status: "Processing", date: "2024-01-26" },
    { id: 13, orderNumber: "ORD-1013", customer: "James Park", product: "Water Bottle", amount: 19.99, status: "Delivered", date: "2024-01-27" },
    { id: 14, orderNumber: "ORD-1014", customer: "Sophia Rodriguez", product: "Coffee Maker", amount: 89.99, status: "Shipped", date: "2024-01-28" },
    { id: 15, orderNumber: "ORD-1015", customer: "Liam Anderson", product: "Bluetooth Speaker", amount: 79.99, status: "Delivered", date: "2024-01-29" },
];

type SortDirection = "asc" | "desc" | null;

export default function DataDisplayPage() {
    return (
        <div style={{ padding: "var(--spacing-8)" }}>
            <div style={{ marginBottom: "var(--spacing-8)" }}>
                <h1 style={{ marginBottom: "var(--spacing-2)" }}>Tables</h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "var(--font-size-body-lg)" }}>
                    Interactive tables with sortable columns, filterable headers, and pagination.
                </p>
            </div>

            {/* Table 1: Basic Table (No Filters) */}
            <section style={{ marginBottom: "var(--spacing-12)" }}>
                <h2 style={{ marginBottom: "var(--spacing-3)" }}>Basic Table</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-4)" }}>
                    Simple sortable table without filters. Click column headers to sort.
                </p>
                <BasicTable />
            </section>

            {/* Table 2: Table with Filters */}
            <section style={{ marginBottom: "var(--spacing-12)" }}>
                <h2 style={{ marginBottom: "var(--spacing-3)" }}>Table with Filters</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-4)" }}>
                    Sortable table with filter inputs and select menus in the sticky header.
                </p>
                <FilteredTable />
            </section>

            {/* Table 3: Table with Filters + Pagination */}
            <section style={{ marginBottom: "var(--spacing-12)" }}>
                <h2 style={{ marginBottom: "var(--spacing-3)" }}>Table with Filters & Pagination</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-4)" }}>
                    Full-featured table with filters, sorting, and pagination controls.
                </p>
                <PaginatedTable />
            </section>
        </div>
    );
}

// ============================================
// TABLE 1: BASIC TABLE (NO FILTERS)
// ============================================

function BasicTable() {
    const [sortKey, setSortKey] = useState<keyof ProductRow | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    const handleSort = (key: keyof ProductRow) => {
        if (sortKey === key) {
            if (sortDirection === "asc") setSortDirection("desc");
            else if (sortDirection === "desc") { setSortKey(null); setSortDirection(null); }
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const sortedData = useMemo(() => {
        if (!sortKey || !sortDirection) return productsData;
        return [...productsData].sort((a, b) => {
            const aVal = a[sortKey];
            const bVal = b[sortKey];
            if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
            if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });
    }, [sortKey, sortDirection]);

    return (
        <TableContainer maxHeight="400px">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ position: "sticky", top: 0, backgroundColor: "var(--bg-surface-secondary)", zIndex: 10 }}>
                    <tr style={{ borderBottom: "1px solid var(--border-default)" }}>
                        <SortableHeader padding="var(--spacing-2) var(--spacing-4)" label="Product Name" sortKey="name" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader padding="var(--spacing-2) var(--spacing-4)" label="Category" sortKey="category" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader padding="var(--spacing-2) var(--spacing-4)" label="Price" sortKey="price" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader padding="var(--spacing-2) var(--spacing-4)" label="Stock" sortKey="stock" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader padding="var(--spacing-2) var(--spacing-4)" label="Status" sortKey="status" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <th style={{ width: "60px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row) => (
                        <tr
                            key={row.id}
                            onMouseEnter={() => setHoveredRow(row.id)}
                            onMouseLeave={() => setHoveredRow(null)}
                            style={{
                                backgroundColor: hoveredRow === row.id ? "var(--row-hover-bg)" : "transparent",
                                transition: "background-color var(--transition-fast)",
                            }}
                        >
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)", fontWeight: 500 }}>{row.name}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)", color: "var(--text-secondary)" }}>{row.category}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>${row.price.toFixed(2)}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>{row.stock}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>
                                <StatusBadge status={row.status} />
                            </td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-2)", textAlign: "center" }}>
                                <MoreOptionsButton visible={hoveredRow === row.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    );
}

// ============================================
// TABLE 2: FILTERED TABLE
// ============================================

function FilteredTable() {
    const [sortKey, setSortKey] = useState<keyof CustomerRow | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [filters, setFilters] = useState({ name: "", location: "", tier: "" });

    const handleSort = (key: keyof CustomerRow) => {
        if (sortKey === key) {
            if (sortDirection === "asc") setSortDirection("desc");
            else if (sortDirection === "desc") { setSortKey(null); setSortDirection(null); }
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const processedData = useMemo(() => {
        let result = customersData.filter((row) =>
            row.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            row.location.toLowerCase().includes(filters.location.toLowerCase()) &&
            (filters.tier === "" || row.tier === filters.tier)
        );

        if (sortKey && sortDirection) {
            result.sort((a, b) => {
                const aVal = a[sortKey];
                const bVal = b[sortKey];
                if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
                if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [filters, sortKey, sortDirection]);

    const uniqueTiers = Array.from(new Set(customersData.map((d) => d.tier)));

    return (
        <TableContainer maxHeight="400px">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ position: "sticky", top: 0, backgroundColor: "var(--bg-surface-secondary)", zIndex: 10 }}>
                    <tr style={{ borderBottom: "none" }}>
                        <SortableHeader label="Customer Name" sortKey="name" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader label="Email" sortKey="email" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader label="Location" sortKey="location" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader label="Tier" sortKey="tier" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <SortableHeader label="Orders" sortKey="orders" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                        <th style={{ width: "60px" }}></th>
                    </tr>
                    <tr style={{ backgroundColor: "var(--bg-surface-secondary)" }}>
                        <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                            <FilterInput
                                placeholder="Filter name..."
                                value={filters.name}
                                onChange={(value) => setFilters({ ...filters, name: value })}
                            />
                        </th>
                        <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}></th>
                        <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                            <FilterInput
                                placeholder="Filter location..."
                                value={filters.location}
                                onChange={(value) => setFilters({ ...filters, location: value })}
                            />
                        </th>
                        <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                            <FilterSelect
                                value={filters.tier}
                                onChange={(value) => setFilters({ ...filters, tier: value })}
                                options={uniqueTiers}
                                placeholder="All Tiers"
                            />
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {processedData.map((row) => (
                        <tr
                            key={row.id}
                            onMouseEnter={() => setHoveredRow(row.id)}
                            onMouseLeave={() => setHoveredRow(null)}
                            style={{
                                backgroundColor: hoveredRow === row.id ? "var(--row-hover-bg)" : "transparent",
                                transition: "background-color var(--transition-fast)",
                            }}
                        >
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)", fontWeight: 500 }}>{row.name}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)", color: "var(--text-secondary)" }}>{row.email}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>{row.location}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>
                                <TierBadge tier={row.tier} />
                            </td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>{row.orders}</td>
                            <td style={{ padding: "var(--spacing-3) var(--spacing-2)", textAlign: "center" }}>
                                <MoreOptionsButton visible={hoveredRow === row.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {processedData.length === 0 && (
                <div style={{ padding: "var(--spacing-12)", textAlign: "center", color: "var(--text-secondary)" }}>
                    <p>No results found</p>
                </div>
            )}
        </TableContainer>
    );
}

// ============================================
// TABLE 3: PAGINATED TABLE
// ============================================

function PaginatedTable() {
    const [sortKey, setSortKey] = useState<keyof OrderRow | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [filters, setFilters] = useState({ customer: "", product: "", status: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSort = (key: keyof OrderRow) => {
        if (sortKey === key) {
            if (sortDirection === "asc") setSortDirection("desc");
            else if (sortDirection === "desc") { setSortKey(null); setSortDirection(null); }
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const processedData = useMemo(() => {
        let result = ordersData.filter((row) =>
            row.customer.toLowerCase().includes(filters.customer.toLowerCase()) &&
            row.product.toLowerCase().includes(filters.product.toLowerCase()) &&
            (filters.status === "" || row.status === filters.status)
        );

        if (sortKey && sortDirection) {
            result.sort((a, b) => {
                const aVal = a[sortKey];
                const bVal = b[sortKey];
                if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
                if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [filters, sortKey, sortDirection]);

    const totalPages = Math.ceil(processedData.length / itemsPerPage);
    const paginatedData = processedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const uniqueStatuses = Array.from(new Set(ordersData.map((d) => d.status)));

    return (
        <>
            <TableContainer maxHeight="500px">
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead style={{ position: "sticky", top: 0, backgroundColor: "var(--bg-surface-secondary)", zIndex: 10 }}>
                        <tr style={{ borderBottom: "none" }}>
                            <SortableHeader label="Order #" sortKey="orderNumber" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <SortableHeader label="Customer" sortKey="customer" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <SortableHeader label="Product" sortKey="product" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <SortableHeader label="Amount" sortKey="amount" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <SortableHeader label="Status" sortKey="status" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <SortableHeader label="Date" sortKey="date" currentSortKey={sortKey} sortDirection={sortDirection} onSort={handleSort} />
                            <th style={{ width: "60px" }}></th>
                        </tr>
                        <tr style={{ backgroundColor: "var(--bg-surface-secondary)" }}>
                            <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}></th>
                            <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                                <FilterInput
                                    placeholder="Filter customer..."
                                    value={filters.customer}
                                    onChange={(value) => setFilters({ ...filters, customer: value })}
                                />
                            </th>
                            <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                                <FilterInput
                                    placeholder="Filter product..."
                                    value={filters.product}
                                    onChange={(value) => setFilters({ ...filters, product: value })}
                                />
                            </th>
                            <th></th>
                            <th style={{ padding: "var(--spacing-1) var(--spacing-4) var(--spacing-2) var(--spacing-4)", textAlign: "left" }}>
                                <FilterSelect
                                    value={filters.status}
                                    onChange={(value) => setFilters({ ...filters, status: value })}
                                    options={uniqueStatuses}
                                    placeholder="All Statuses"
                                />
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row) => (
                            <tr
                                key={row.id}
                                onMouseEnter={() => setHoveredRow(row.id)}
                                onMouseLeave={() => setHoveredRow(null)}
                                style={{
                                    backgroundColor: hoveredRow === row.id ? "var(--row-hover-bg)" : "transparent",
                                    transition: "background-color var(--transition-fast)",
                                }}
                            >
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)", fontWeight: 500 }}>{row.orderNumber}</td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>{row.customer}</td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)", color: "var(--text-secondary)" }}>{row.product}</td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>${row.amount.toFixed(2)}</td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)" }}>
                                    <OrderStatusBadge status={row.status} />
                                </td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-4)", color: "var(--text-secondary)" }}>
                                    {new Date(row.date).toLocaleDateString()}
                                </td>
                                <td style={{ padding: "var(--spacing-3) var(--spacing-2)", textAlign: "center" }}>
                                    <MoreOptionsButton visible={hoveredRow === row.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {paginatedData.length === 0 && (
                    <div style={{ padding: "var(--spacing-12)", textAlign: "center", color: "var(--text-secondary)" }}>
                        <p>No results found</p>
                    </div>
                )}
            </TableContainer>

            {/* Pagination Controls */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "var(--spacing-4)",
                    padding: "var(--spacing-3) var(--spacing-4)",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-md)",
                }}
            >
                <div style={{ fontSize: "var(--font-size-body-sm)", color: "var(--text-secondary)" }}>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, processedData.length)} of {processedData.length} results
                </div>
                <div style={{ display: "flex", gap: "var(--spacing-2)", alignItems: "center" }}>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--spacing-1)",
                            padding: "var(--spacing-1) var(--spacing-2)",
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                            borderRadius: "5px",
                            cursor: currentPage === 1 ? "not-allowed" : "pointer",
                            opacity: currentPage === 1 ? 0.5 : 1,
                            color: "var(--text-primary)",
                            fontSize: "var(--font-size-body-sm)",
                            transition: "all var(--transition-default)",
                        }}
                        onMouseEnter={(e) => {
                            if (currentPage !== 1) {
                                e.currentTarget.style.borderColor = "var(--border-strong)";
                                e.currentTarget.style.backgroundColor = "var(--bg-surface-secondary)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-default)";
                            e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                        }}
                    >
                        <CaretLeft size={14} />
                        Previous
                    </button>
                    <span style={{ fontSize: "var(--font-size-body-sm)", color: "var(--text-secondary)" }}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--spacing-1)",
                            padding: "var(--spacing-1) var(--spacing-2)",
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                            borderRadius: "5px",
                            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                            opacity: currentPage === totalPages ? 0.5 : 1,
                            color: "var(--text-primary)",
                            fontSize: "var(--font-size-body-sm)",
                            transition: "all var(--transition-default)",
                        }}
                        onMouseEnter={(e) => {
                            if (currentPage !== totalPages) {
                                e.currentTarget.style.borderColor = "var(--border-strong)";
                                e.currentTarget.style.backgroundColor = "var(--bg-surface-secondary)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-default)";
                            e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                        }}
                    >
                        Next
                        <CaretRight size={14} />
                    </button>
                </div>
            </div>
        </>
    );
}

// ============================================
// SHARED COMPONENTS
// ============================================

function TableContainer({ children, maxHeight }: { children: React.ReactNode; maxHeight?: string }) {
    return (
        <div
            style={{
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-default)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <div style={{ overflowX: "auto", overflowY: "auto", maxHeight }}>{children}</div>
        </div>
    );
}

interface SortableHeaderProps<T> {
    label: string;
    sortKey: T;
    currentSortKey: T | null;
    sortDirection: SortDirection;
    onSort: (key: T) => void;
    padding?: string;
}

function SortableHeader<T>({ label, sortKey, currentSortKey, sortDirection, onSort, padding = "var(--spacing-2) var(--spacing-4) var(--spacing-1) var(--spacing-4)" }: SortableHeaderProps<T>) {
    const isActive = currentSortKey === sortKey;
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <th
            onClick={() => onSort(sortKey)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding,
                textAlign: "left",
                cursor: "pointer",
                userSelect: "none",
                fontWeight: 600,
                fontSize: "var(--font-size-body-sm)",
                color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
                transition: "color var(--transition-default)",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-1)" }}>
                <span>{label}</span>
                <span
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        opacity: isActive || isHovered ? 1 : 0,
                        transition: "opacity var(--transition-fast)",
                    }}
                >
                    {isActive && sortDirection === "asc" ? (
                        <CaretUp size={14} weight="bold" style={{ color: "var(--primary-default)" }} />
                    ) : isActive && sortDirection === "desc" ? (
                        <CaretDown size={14} weight="bold" style={{ color: "var(--primary-default)" }} />
                    ) : (
                        <CaretUp size={14} weight="bold" />
                    )}
                </span>
            </div>
        </th>
    );
}

function FilterInput({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="transition-all"
            style={{
                width: "100%",
                height: "30px",
                padding: "0 12px",
                fontSize: "13px",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-default)",
                borderRadius: "5px",
                outline: "none",
                fontWeight: 400,
            }}
            onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--green-400)";
                e.currentTarget.style.boxShadow = "0 0 0 2px var(--green-100)";
            }}
            onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.boxShadow = "none";
            }}
        />
    );
}

function FilterSelect({ value, onChange, options, placeholder }: { value: string; onChange: (value: string) => void; options: string[]; placeholder: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} style={{ position: "relative" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-all"
                style={{
                    width: "100%",
                    height: "30px",
                    padding: "0 12px",
                    fontSize: "13px",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "5px",
                    outline: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    borderColor: isOpen ? "var(--green-400)" : "var(--border-default)",
                    boxShadow: isOpen ? "0 0 0 2px var(--green-100)" : "none",
                    fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.borderColor = "var(--green-400)";
                }}
                onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.borderColor = "var(--border-default)";
                }}
            >
                <span>{value || placeholder}</span>
                <CaretDown size={14} />
            </button>
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-default)",
                        borderRadius: "5px",
                        boxShadow: "var(--shadow-lg)",
                        zIndex: 50,
                        overflow: "hidden",
                    }}
                >
                    <button
                        onClick={() => {
                            onChange("");
                            setIsOpen(false);
                        }}
                        style={{
                            width: "100%",
                            padding: "8px 12px",
                            fontSize: "13px",
                            backgroundColor: value === "" ? "var(--primary-subtle-bg)" : "transparent",
                            color: value === "" ? "var(--primary-subtle-text)" : "var(--text-primary)",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        onMouseEnter={(e) => {
                            if (value !== "") e.currentTarget.style.backgroundColor = "var(--bg-surface-secondary)";
                        }}
                        onMouseLeave={(e) => {
                            if (value !== "") e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        <span>{placeholder}</span>
                        {value === "" && <Check size={14} weight="bold" />}
                    </button>
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            style={{
                                width: "100%",
                                padding: "8px 12px",
                                fontSize: "13px",
                                backgroundColor:
                                    value === option
                                        ? "var(--primary-subtle-bg)"
                                        : "transparent",
                                color:
                                    value === option
                                        ? "var(--primary-subtle-text)"
                                        : "var(--text-primary)",
                                border: "none",
                                cursor: "pointer",
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            onMouseEnter={(e) => {
                                if (value !== option) {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--bg-surface-secondary)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (value !== option) {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }
                            }}
                        >
                            <span>{option}</span>
                            {value === option && (
                                <Check size={14} weight="bold" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}



// ... existing code ...

function MoreOptionsButton({ visible }: { visible: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside (simple backdrop approach)
    useEffect(() => {
        if (isOpen) {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") setIsOpen(false);
            };
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen]);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 15,
                        cursor: "default",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                    }}
                />
            )}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className={`more-options-btn ${isOpen ? "open" : ""}`}
                style={{
                    opacity: visible || isOpen ? 1 : 0,
                }}
            >
                <DotsThree size={20} weight="bold" />
            </button>

            <style jsx>{`
                .more-options-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border: 1px solid transparent;
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all var(--transition-default);
                }

                .more-options-btn.open {
                    background: var(--bg-surface-secondary);
                    color: var(--text-primary);
                }

                /* Light Mode Hover */
                .more-options-btn:hover {
                    background: white;
                    border-color: var(--border-default);
                    color: var(--text-primary);
                    box-shadow: var(--shadow-sm);
                }

                /* Dark Mode Hover */
                :global([data-theme="dark"]) .more-options-btn:hover {
                    background: black;
                    color: white;
                    border-color: transparent;
                    box-shadow: none;
                }
            `}</style>

            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        right: "100%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        marginRight: "10px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-default)",
                        borderRadius: "var(--radius-md)",
                        boxShadow: "var(--shadow-lg)",
                        padding: "var(--spacing-1)",
                        zIndex: 20,
                        minWidth: "160px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ContextMenuItem icon={PencilSimple} label="Edit" onClick={() => setIsOpen(false)} />
                    <ContextMenuItem icon={Copy} label="Duplicate" onClick={() => setIsOpen(false)} />
                    <div style={{ height: "1px", backgroundColor: "var(--border-default)", margin: "var(--spacing-1) 0" }} />
                    <ContextMenuItem icon={Trash} label="Delete" isDestructive onClick={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    );
}

function ContextMenuItem({ label, icon: Icon, isDestructive = false, onClick }: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-2)",
                width: "100%",
                padding: "var(--spacing-2) var(--spacing-3)",
                border: "none",
                background: isHovered
                    ? (isDestructive ? "var(--error-50)" : "var(--bg-surface-secondary)")
                    : "transparent",
                color: isDestructive ? "var(--error-700)" : "var(--text-primary)",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                fontSize: "var(--font-size-body-sm)",
                textAlign: "left",
                transition: "all var(--transition-fast)",
            }}
        >
            {Icon && <Icon size={16} />}
            {label}
        </button>
    );
}

function StatusBadge({ status }: { status: string }) {
    const getColors = () => {
        if (status === "In Stock") return { bg: "var(--green-100)", text: "var(--green-700)", darkBg: "var(--green-950)", darkText: "var(--green-400)" };
        if (status === "Low Stock") return { bg: "var(--warning-100)", text: "var(--warning-700)", darkBg: "var(--warning-950)", darkText: "var(--warning-400)" };
        return { bg: "var(--gray-200)", text: "var(--gray-700)", darkBg: "var(--gray-800)", darkText: "var(--gray-400)" };
    };

    const colors = getColors();

    return (
        <span
            style={{
                display: "inline-block",
                padding: "4px var(--spacing-2)",
                borderRadius: "5px",
                fontSize: "var(--font-size-body-sm)",
                fontWeight: 500,
            }}
            className="status-badge"
        >
            {status}
            <style jsx>{`
                .status-badge {
                    background: ${colors.bg};
                    color: ${colors.text};
                }
                [data-theme="dark"] .status-badge {
                    background: ${colors.darkBg};
                    color: ${colors.darkText};
                }
            `}</style>
        </span>
    );
}

function TierBadge({ tier }: { tier: string }) {
    const getColors = () => {
        if (tier === "Platinum") return { bg: "var(--gray-800)", text: "var(--white)", darkBg: "var(--gray-200)", darkText: "var(--gray-900)" };
        if (tier === "Gold") return { bg: "var(--warning-500)", text: "var(--white)", darkBg: "var(--warning-600)", darkText: "var(--white)" };
        if (tier === "Silver") return { bg: "var(--gray-400)", text: "var(--white)", darkBg: "var(--gray-500)", darkText: "var(--white)" };
        return { bg: "var(--gray-200)", text: "var(--gray-700)", darkBg: "var(--gray-700)", darkText: "var(--gray-200)" };
    };

    const colors = getColors();

    return (
        <span
            style={{
                display: "inline-block",
                padding: "4px var(--spacing-2)",
                borderRadius: "5px",
                fontSize: "var(--font-size-body-sm)",
                fontWeight: 500,
            }}
            className="tier-badge"
        >
            {tier}
            <style jsx>{`
                .tier-badge {
                    background: ${colors.bg};
                    color: ${colors.text};
                }
                [data-theme="dark"] .tier-badge {
                    background: ${colors.darkBg};
                    color: ${colors.darkText};
                }
            `}</style>
        </span>
    );
}

function OrderStatusBadge({ status }: { status: string }) {
    const getColors = () => {
        if (status === "Delivered") return { bg: "var(--green-100)", text: "var(--green-700)", darkBg: "var(--green-950)", darkText: "var(--green-400)" };
        if (status === "Shipped") return { bg: "var(--info-100)", text: "var(--info-700)", darkBg: "var(--info-950)", darkText: "var(--info-400)" };
        if (status === "Processing") return { bg: "var(--warning-100)", text: "var(--warning-700)", darkBg: "var(--warning-950)", darkText: "var(--warning-400)" };
        return { bg: "var(--error-100)", text: "var(--error-700)", darkBg: "var(--error-950)", darkText: "var(--error-400)" };
    };

    const colors = getColors();

    return (
        <span
            style={{
                display: "inline-block",
                padding: "4px var(--spacing-2)",
                borderRadius: "5px",
                fontSize: "var(--font-size-body-sm)",
                fontWeight: 500,
            }}
            className="order-status-badge"
        >
            {status}
            <style jsx>{`
                .order-status-badge {
                    background: ${colors.bg};
                    color: ${colors.text};
                }
                [data-theme="dark"] .order-status-badge {
                    background: ${colors.darkBg};
                    color: ${colors.darkText};
                }
            `}</style>
        </span>
    );
}
