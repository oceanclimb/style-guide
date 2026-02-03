"use client";

import { useState } from "react";
import {
    // Common UI Icons
    MagnifyingGlass, Copy, Check, X, Plus, Minus, CaretDown, CaretUp, CaretLeft, CaretRight,
    ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowsClockwise, ArrowSquareOut, ArrowUUpLeft,

    // Navigation & Layout
    House, Compass, List, Rows, Columns, Sidebar, Layout, SquaresFour, GridFour, DotsThree,
    DotsThreeVertical, DotsNine, Hamburger, FrameCorners, Browsers,

    // Communication
    Chat, ChatCircle, ChatDots, Envelope, EnvelopeSimple, Phone, PhoneCall, Bell, BellRinging,
    PaperPlane, PaperPlaneTilt, Megaphone, Broadcast,

    // Media & Files
    Image, Images, File, FileText, FilePdf, FileDoc, Folder, FolderOpen, Upload, Download,
    CloudArrowUp, CloudArrowDown, Camera, Video, Microphone, Play, Pause,

    // User & Social
    User, UserCircle, Users, UsersThree, Heart, Star, Share, ShareNetwork, ThumbsUp, ThumbsDown,
    Smiley, SmileyWink, HandWaving, Eye, EyeSlash, UserPlus, UserMinus,

    // Commerce & Business
    ShoppingCart, ShoppingBag, CreditCard, Money, Coin, Receipt, Tag, Barcode, Package,
    Storefront, TrendUp, TrendDown, ChartLine, ChartBar, PresentationChart,

    // Text & Editing
    TextAa, TextAlignLeft, TextAlignCenter, TextAlignRight, TextB, TextItalic, TextUnderline,
    Pencil, PencilSimple, Pen, Eraser, HighlighterCircle, Note, NotePencil, Notebook,

    // Settings & Tools
    Gear, GearSix, Wrench, Hammer, Screwdriver, Nut, Sliders, SlidersHorizontal, Funnel,
    MagicWand, Eyedropper, Palette, PaintBrush, PaintBucket,

    // Time & Calendar
    Clock, ClockClockwise, Timer, Hourglass, Calendar, CalendarBlank, CalendarCheck, CalendarX,

    // Weather & Nature
    Sun, Moon, CloudRain, Cloud, CloudSnow, Lightning, Drop, Fire, Leaf, Tree, Plant, Flower,

    // Location & Maps
    MapPin, MapTrifold, NavigationArrow, Compass as CompassIcon, Globe, GlobeHemisphereWest,
    Buildings, Building, House as HouseIcon, Warehouse, Bank,

    // Devices & Technology
    Desktop, Monitor, Laptop, DeviceMobile, Watch, Headphones, Keyboard, Mouse,
    Printer, Cpu, HardDrive, Database, WifiHigh, Bluetooth, BatteryCharging,

    // Security & Privacy
    Lock, LockOpen, Key, Shield, ShieldCheck, ShieldWarning, Fingerprint, Password,

    // Alerts & Status
    Info, Question, Warning, WarningCircle, CheckCircle, XCircle, Prohibit, SignIn, SignOut,

    // Actions & Controls
    Trash, TrashSimple, Archive, BookmarkSimple, Bookmark, Flag, PushPin, Link, LinkBreak,
    Export, Shuffle, Repeat, RepeatOnce, SortAscending, SortDescending,

    // Shapes & Design
    Circle, Square, Triangle, Pentagon, Hexagon, Octagon, Heart as HeartIcon, Star as StarIcon,
    Diamond, Polygon, Cube, CubeFocus, Cylinder,

    // Code & Development
    Code, CodeBlock, Terminal, GitBranch, GitCommit, GitDiff, GitFork, GitMerge, GitPullRequest,
    Bug, BracketsCurly, BracketsAngle, Hash, At, Percent,

    // Math & Science
    Equals, NotEquals, PlusMinus, Infinity, Pi, Radical, Function, Sigma, Atom, Flask,

    // Games & Entertainment
    GameController, Trophy, Medal, Target, Rocket, Airplane, Bicycle,

    // Food & Drink
    Coffee, Wine, ForkKnife, Pizza, Hamburger as HamburgerIcon, IceCream,

    // Animals & Nature  
    Dog, Cat, Fish, Bird, Butterfly, Bug as BugIcon,

    // Arrows & Directions
    ArrowBendUpLeft, ArrowBendUpRight, ArrowBendDownLeft, ArrowBendDownRight, ArrowCircleLeft,
    ArrowCircleRight, ArrowCircleUp, ArrowCircleDown, ArrowFatUp, ArrowFatDown, ArrowFatLeft,
    ArrowFatRight, ArrowLineUp, ArrowLineDown, ArrowLineLeft, ArrowLineRight,

    // Additional Common Icons
    Sparkle, Lightning as LightningIcon, Ruler, Textbox, CursorClick, Table, FrameCorners as Frame,
    Palette as PaletteIcon, Bell as BellIcon, Compass as CompassNav, Eye as EyeIcon,
} from "@phosphor-icons/react";

interface IconItem {
    name: string;
    component: React.ComponentType<any>;
}

export default function IconsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    // Comprehensive list of Phosphor icons
    const allIcons: IconItem[] = [
        // Common UI Icons
        { name: "MagnifyingGlass", component: MagnifyingGlass },
        { name: "Copy", component: Copy },
        { name: "Check", component: Check },
        { name: "X", component: X },
        { name: "Plus", component: Plus },
        { name: "Minus", component: Minus },
        { name: "CaretDown", component: CaretDown },
        { name: "CaretUp", component: CaretUp },
        { name: "CaretLeft", component: CaretLeft },
        { name: "CaretRight", component: CaretRight },
        { name: "ArrowLeft", component: ArrowLeft },
        { name: "ArrowRight", component: ArrowRight },
        { name: "ArrowUp", component: ArrowUp },
        { name: "ArrowDown", component: ArrowDown },
        { name: "ArrowsClockwise", component: ArrowsClockwise },
        { name: "ArrowSquareOut", component: ArrowSquareOut },
        { name: "ArrowUUpLeft", component: ArrowUUpLeft },

        // Navigation & Layout
        { name: "House", component: House },
        { name: "Compass", component: Compass },
        { name: "List", component: List },
        { name: "Rows", component: Rows },
        { name: "Columns", component: Columns },
        { name: "Sidebar", component: Sidebar },
        { name: "Layout", component: Layout },
        { name: "SquaresFour", component: SquaresFour },
        { name: "GridFour", component: GridFour },
        { name: "DotsThree", component: DotsThree },
        { name: "DotsThreeVertical", component: DotsThreeVertical },
        { name: "DotsNine", component: DotsNine },
        { name: "Hamburger", component: Hamburger },
        { name: "FrameCorners", component: FrameCorners },
        { name: "Browsers", component: Browsers },

        // Communication
        { name: "Chat", component: Chat },
        { name: "ChatCircle", component: ChatCircle },
        { name: "ChatDots", component: ChatDots },
        { name: "Envelope", component: Envelope },
        { name: "EnvelopeSimple", component: EnvelopeSimple },
        { name: "Phone", component: Phone },
        { name: "PhoneCall", component: PhoneCall },
        { name: "Bell", component: Bell },
        { name: "BellRinging", component: BellRinging },
        { name: "PaperPlane", component: PaperPlane },
        { name: "PaperPlaneTilt", component: PaperPlaneTilt },
        { name: "Megaphone", component: Megaphone },
        { name: "Broadcast", component: Broadcast },

        // Media & Files
        { name: "Image", component: Image },
        { name: "Images", component: Images },
        { name: "File", component: File },
        { name: "FileText", component: FileText },
        { name: "FilePdf", component: FilePdf },
        { name: "FileDoc", component: FileDoc },
        { name: "Folder", component: Folder },
        { name: "FolderOpen", component: FolderOpen },
        { name: "Upload", component: Upload },
        { name: "Download", component: Download },
        { name: "CloudArrowUp", component: CloudArrowUp },
        { name: "CloudArrowDown", component: CloudArrowDown },
        { name: "Camera", component: Camera },
        { name: "Video", component: Video },
        { name: "Microphone", component: Microphone },
        { name: "Play", component: Play },
        { name: "Pause", component: Pause },

        // User & Social
        { name: "User", component: User },
        { name: "UserCircle", component: UserCircle },
        { name: "Users", component: Users },
        { name: "UsersThree", component: UsersThree },
        { name: "Heart", component: Heart },
        { name: "Star", component: Star },
        { name: "Share", component: Share },
        { name: "ShareNetwork", component: ShareNetwork },
        { name: "ThumbsUp", component: ThumbsUp },
        { name: "ThumbsDown", component: ThumbsDown },
        { name: "Smiley", component: Smiley },
        { name: "SmileyWink", component: SmileyWink },
        { name: "HandWaving", component: HandWaving },
        { name: "Eye", component: Eye },
        { name: "EyeSlash", component: EyeSlash },
        { name: "UserPlus", component: UserPlus },
        { name: "UserMinus", component: UserMinus },

        // Commerce & Business
        { name: "ShoppingCart", component: ShoppingCart },
        { name: "ShoppingBag", component: ShoppingBag },
        { name: "CreditCard", component: CreditCard },
        { name: "Money", component: Money },
        { name: "Coin", component: Coin },
        { name: "Receipt", component: Receipt },
        { name: "Tag", component: Tag },
        { name: "Barcode", component: Barcode },
        { name: "Package", component: Package },
        { name: "Storefront", component: Storefront },
        { name: "TrendUp", component: TrendUp },
        { name: "TrendDown", component: TrendDown },
        { name: "ChartLine", component: ChartLine },
        { name: "ChartBar", component: ChartBar },
        { name: "PresentationChart", component: PresentationChart },

        // Text & Editing
        { name: "TextAa", component: TextAa },
        { name: "TextAlignLeft", component: TextAlignLeft },
        { name: "TextAlignCenter", component: TextAlignCenter },
        { name: "TextAlignRight", component: TextAlignRight },
        { name: "TextB", component: TextB },
        { name: "TextItalic", component: TextItalic },
        { name: "TextUnderline", component: TextUnderline },
        { name: "Pencil", component: Pencil },
        { name: "PencilSimple", component: PencilSimple },
        { name: "Pen", component: Pen },
        { name: "Eraser", component: Eraser },
        { name: "HighlighterCircle", component: HighlighterCircle },
        { name: "Note", component: Note },
        { name: "NotePencil", component: NotePencil },
        { name: "Notebook", component: Notebook },

        // Settings & Tools
        { name: "Gear", component: Gear },
        { name: "GearSix", component: GearSix },
        { name: "Wrench", component: Wrench },
        { name: "Hammer", component: Hammer },
        { name: "Screwdriver", component: Screwdriver },
        { name: "Nut", component: Nut },
        { name: "Sliders", component: Sliders },
        { name: "SlidersHorizontal", component: SlidersHorizontal },
        { name: "Funnel", component: Funnel },
        { name: "MagicWand", component: MagicWand },
        { name: "Eyedropper", component: Eyedropper },
        { name: "Palette", component: Palette },
        { name: "PaintBrush", component: PaintBrush },
        { name: "PaintBucket", component: PaintBucket },

        // Time & Calendar
        { name: "Clock", component: Clock },
        { name: "ClockClockwise", component: ClockClockwise },
        { name: "Timer", component: Timer },
        { name: "Hourglass", component: Hourglass },
        { name: "Calendar", component: Calendar },
        { name: "CalendarBlank", component: CalendarBlank },
        { name: "CalendarCheck", component: CalendarCheck },
        { name: "CalendarX", component: CalendarX },

        // Weather & Nature
        { name: "Sun", component: Sun },
        { name: "Moon", component: Moon },
        { name: "CloudRain", component: CloudRain },
        { name: "Cloud", component: Cloud },
        { name: "CloudSnow", component: CloudSnow },
        { name: "Lightning", component: Lightning },
        { name: "Drop", component: Drop },
        { name: "Fire", component: Fire },
        { name: "Leaf", component: Leaf },
        { name: "Tree", component: Tree },
        { name: "Plant", component: Plant },
        { name: "Flower", component: Flower },

        // Location & Maps
        { name: "MapPin", component: MapPin },
        { name: "MapTrifold", component: MapTrifold },
        { name: "NavigationArrow", component: NavigationArrow },
        { name: "Globe", component: Globe },
        { name: "GlobeHemisphereWest", component: GlobeHemisphereWest },
        { name: "Buildings", component: Buildings },
        { name: "Building", component: Building },
        { name: "Warehouse", component: Warehouse },
        { name: "Bank", component: Bank },

        // Devices & Technology
        { name: "Desktop", component: Desktop },
        { name: "Monitor", component: Monitor },
        { name: "Laptop", component: Laptop },
        { name: "DeviceMobile", component: DeviceMobile },
        { name: "Watch", component: Watch },
        { name: "Headphones", component: Headphones },
        { name: "Keyboard", component: Keyboard },
        { name: "Mouse", component: Mouse },
        { name: "Printer", component: Printer },
        { name: "Cpu", component: Cpu },
        { name: "HardDrive", component: HardDrive },
        { name: "Database", component: Database },
        { name: "WifiHigh", component: WifiHigh },
        { name: "Bluetooth", component: Bluetooth },
        { name: "BatteryCharging", component: BatteryCharging },

        // Security & Privacy
        { name: "Lock", component: Lock },
        { name: "LockOpen", component: LockOpen },
        { name: "Key", component: Key },
        { name: "Shield", component: Shield },
        { name: "ShieldCheck", component: ShieldCheck },
        { name: "ShieldWarning", component: ShieldWarning },
        { name: "Fingerprint", component: Fingerprint },
        { name: "Password", component: Password },

        // Alerts & Status
        { name: "Info", component: Info },
        { name: "Question", component: Question },
        { name: "Warning", component: Warning },
        { name: "WarningCircle", component: WarningCircle },
        { name: "CheckCircle", component: CheckCircle },
        { name: "XCircle", component: XCircle },
        { name: "Prohibit", component: Prohibit },
        { name: "SignIn", component: SignIn },
        { name: "SignOut", component: SignOut },

        // Actions & Controls
        { name: "Trash", component: Trash },
        { name: "TrashSimple", component: TrashSimple },
        { name: "Archive", component: Archive },
        { name: "BookmarkSimple", component: BookmarkSimple },
        { name: "Bookmark", component: Bookmark },
        { name: "Flag", component: Flag },
        { name: "PushPin", component: PushPin },
        { name: "Link", component: Link },
        { name: "LinkBreak", component: LinkBreak },
        { name: "Export", component: Export },
        { name: "Shuffle", component: Shuffle },
        { name: "Repeat", component: Repeat },
        { name: "RepeatOnce", component: RepeatOnce },
        { name: "SortAscending", component: SortAscending },
        { name: "SortDescending", component: SortDescending },

        // Shapes & Design
        { name: "Circle", component: Circle },
        { name: "Square", component: Square },
        { name: "Triangle", component: Triangle },
        { name: "Pentagon", component: Pentagon },
        { name: "Hexagon", component: Hexagon },
        { name: "Octagon", component: Octagon },
        { name: "Diamond", component: Diamond },
        { name: "Polygon", component: Polygon },
        { name: "Cube", component: Cube },
        { name: "CubeFocus", component: CubeFocus },
        { name: "Cylinder", component: Cylinder },

        // Code & Development
        { name: "Code", component: Code },
        { name: "CodeBlock", component: CodeBlock },
        { name: "Terminal", component: Terminal },
        { name: "GitBranch", component: GitBranch },
        { name: "GitCommit", component: GitCommit },
        { name: "GitDiff", component: GitDiff },
        { name: "GitFork", component: GitFork },
        { name: "GitMerge", component: GitMerge },
        { name: "GitPullRequest", component: GitPullRequest },
        { name: "Bug", component: Bug },
        { name: "BracketsCurly", component: BracketsCurly },
        { name: "BracketsAngle", component: BracketsAngle },
        { name: "Hash", component: Hash },
        { name: "At", component: At },
        { name: "Percent", component: Percent },

        // Math & Science
        { name: "Equals", component: Equals },
        { name: "NotEquals", component: NotEquals },
        { name: "PlusMinus", component: PlusMinus },
        { name: "Infinity", component: Infinity },
        { name: "Pi", component: Pi },
        { name: "Radical", component: Radical },
        { name: "Function", component: Function },
        { name: "Sigma", component: Sigma },
        { name: "Atom", component: Atom },
        { name: "Flask", component: Flask },

        // Games & Entertainment
        { name: "GameController", component: GameController },
        { name: "Trophy", component: Trophy },
        { name: "Medal", component: Medal },
        { name: "Target", component: Target },
        { name: "Rocket", component: Rocket },
        { name: "Airplane", component: Airplane },
        { name: "Bicycle", component: Bicycle },

        // Food & Drink
        { name: "Coffee", component: Coffee },
        { name: "Wine", component: Wine },
        { name: "ForkKnife", component: ForkKnife },
        { name: "Pizza", component: Pizza },
        { name: "IceCream", component: IceCream },

        // Animals & Nature
        { name: "Dog", component: Dog },
        { name: "Cat", component: Cat },
        { name: "Fish", component: Fish },
        { name: "Bird", component: Bird },
        { name: "Butterfly", component: Butterfly },

        // Arrows & Directions
        { name: "ArrowBendUpLeft", component: ArrowBendUpLeft },
        { name: "ArrowBendUpRight", component: ArrowBendUpRight },
        { name: "ArrowBendDownLeft", component: ArrowBendDownLeft },
        { name: "ArrowBendDownRight", component: ArrowBendDownRight },
        { name: "ArrowCircleLeft", component: ArrowCircleLeft },
        { name: "ArrowCircleRight", component: ArrowCircleRight },
        { name: "ArrowCircleUp", component: ArrowCircleUp },
        { name: "ArrowCircleDown", component: ArrowCircleDown },
        { name: "ArrowFatUp", component: ArrowFatUp },
        { name: "ArrowFatDown", component: ArrowFatDown },
        { name: "ArrowFatLeft", component: ArrowFatLeft },
        { name: "ArrowFatRight", component: ArrowFatRight },
        { name: "ArrowLineUp", component: ArrowLineUp },
        { name: "ArrowLineDown", component: ArrowLineDown },
        { name: "ArrowLineLeft", component: ArrowLineLeft },
        { name: "ArrowLineRight", component: ArrowLineRight },

        // Additional Common Icons
        { name: "Sparkle", component: Sparkle },
        { name: "Ruler", component: Ruler },
        { name: "Textbox", component: Textbox },
        { name: "CursorClick", component: CursorClick },
        { name: "Table", component: Table },
    ];

    // Filter icons based on search query
    const filteredIcons = allIcons.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCopy = (iconName: string) => {
        const importCode = `import { ${iconName} } from "@phosphor-icons/react";\n\n<${iconName} size={24} />`;
        navigator.clipboard.writeText(importCode);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
    };

    return (
        <div className="p-8 max-w-7xl">
            {/* Header */}
            <div style={{ marginBottom: "var(--spacing-40)" }}>
                <h1
                    style={{
                        fontSize: "var(--font-size-h2)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "10px",
                    }}
                >
                    Icons
                </h1>
                <p
                    style={{
                        fontSize: "var(--font-size-body)",
                        color: "var(--text-secondary)",
                        marginBottom: "10px",
                    }}
                >
                    Using <strong>@phosphor-icons/react</strong> - A flexible icon family for interfaces, diagrams, presentations.
                </p>

                {/* Search Input */}
                <div style={{ position: "relative", maxWidth: "400px", marginBottom: "10px" }}>
                    <MagnifyingGlass
                        size={20}
                        style={{
                            position: "absolute",
                            left: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "var(--text-tertiary)",
                            pointerEvents: "none",
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: "100%",
                            height: "40px",
                            padding: "0 12px 0 40px",
                            fontSize: "var(--font-size-body)",
                            color: "var(--text-primary)",
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                            borderRadius: "5px",
                            outline: "none",
                            transition: "all 0.2s ease",
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "var(--primary-default)";
                            e.target.style.boxShadow = "0 0 0 3px var(--primary-subtle-bg)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "var(--border-default)";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                </div>

                {/* Results Count */}
                <p
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                >
                    Showing {filteredIcons.length} of {allIcons.length} icons
                </p>
            </div>

            {/* Icons Grid - 4 columns, responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredIcons.map((icon) => {
                    const IconComponent = icon.component;
                    const isCopied = copiedIcon === icon.name;

                    return (
                        <div
                            key={icon.name}
                            className="icon-box"
                            style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "var(--spacing-15)",
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid var(--border-default)",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "all 0.25s ease",
                                minHeight: "100px",
                            }}
                            onClick={() => handleCopy(icon.name)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--primary-default)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                                const copyBtn = e.currentTarget.querySelector(".copy-button") as HTMLElement;
                                if (copyBtn) copyBtn.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-default)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                                const copyBtn = e.currentTarget.querySelector(".copy-button") as HTMLElement;
                                if (copyBtn) copyBtn.style.opacity = "0";
                            }}
                        >
                            {/* Copy Button */}
                            <div
                                className="copy-button"
                                style={{
                                    position: "absolute",
                                    top: "6px",
                                    right: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: isCopied ? "var(--success-default)" : "var(--primary-default)",
                                    borderRadius: "4px",
                                    opacity: 0,
                                    transition: "all 0.25s ease",
                                }}
                            >
                                {isCopied ? (
                                    <Check size={14} weight="bold" color="white" />
                                ) : (
                                    <Copy size={14} weight="bold" color="white" />
                                )}
                            </div>

                            {/* Icon */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "10px",
                                    color: "var(--text-primary)",
                                }}
                            >
                                <IconComponent size={28} />
                            </div>

                            {/* Icon Name */}
                            <span
                                style={{
                                    fontSize: "var(--font-size-small)",
                                    color: "var(--text-secondary)",
                                    textAlign: "center",
                                    wordBreak: "break-word",
                                    lineHeight: 1.2,
                                }}
                            >
                                {icon.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* No Results */}
            {filteredIcons.length === 0 && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "var(--spacing-80)",
                        textAlign: "center",
                    }}
                >
                    <MagnifyingGlass size={64} style={{ color: "var(--text-tertiary)", marginBottom: "var(--spacing-20)" }} />
                    <h3
                        style={{
                            fontSize: "var(--font-size-h4)",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            marginBottom: "var(--spacing-10)",
                        }}
                    >
                        No icons found
                    </h3>
                    <p style={{ fontSize: "var(--font-size-body)", color: "var(--text-secondary)" }}>
                        Try searching with a different keyword
                    </p>
                </div>
            )}
        </div>
    );
}
