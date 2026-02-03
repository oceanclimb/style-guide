export default function AccessibilityPage() {
    return (
        <div className="p-8">
            <h1 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
                Accessibility Implementation Guide
            </h1>
            <p
                className="mb-8"
                style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--font-size-body-lg)",
                }}
            >
                A comprehensive guide to implementing accessible practices in our application.
            </p>

            {/* Color & Contrast */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Color & Contrast
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            WCAG Contrast Requirements
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Normal text under 18 pixels requires a minimum 4.5:1 contrast ratio. Large
                            text at 18 pixels or larger, or 14 pixels bold or larger, requires a
                            minimum 3:1 contrast ratio. UI components and graphics need a minimum 3:1
                            contrast ratio against adjacent colors.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            When implementing, ensure your primary text color has sufficient contrast.
                            For example, dark gray text on white background should pass the 4.5:1 ratio,
                            while lighter gray often fails with only 2.8:1 contrast and should be
                            avoided for body text.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Testing Tools
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            In development, use browser DevTools including Chrome or Edge Lighthouse and
                            Firefox Accessibility Inspector. During the design phase, use Figma plugins
                            like Stark or A11y Color Contrast Checker, or online tools like WebAIM
                            Contrast Checker. For automated testing, integrate axe-core or pa11y into
                            your CI/CD pipeline.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Color-Blind Safe Palettes
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Avoid using red and green as the sole differentiators between states or
                            categories. Instead, use patterns, textures, or labels alongside color. Test
                            your designs with color-blind simulators available in Chrome DevTools or
                            tools like Coblis.
                        </p>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For status indicators, never rely on color alone. A bad implementation shows
                            success only with green text. A good implementation combines color with an
                            icon and explicit text label, ensuring the information is conveyed through
                            multiple channels.
                        </p>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Typography</h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Font Sizing
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Body text should be 16 pixels minimum, which equals 1rem. Small text should
                            be 14 pixels absolute minimum and used sparingly for captions or secondary
                            information. Large text for emphasis should be 18 pixels or larger. Always
                            use relative units like rem or em to respect user zoom settings.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Set your body font size to 16 pixels or 100 percent. Small text at 0.875rem
                            or 14 pixels should only be used for captions and non-critical information.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Line Height & Spacing
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Body text requires a 1.5 line-height minimum according to WCAG 1.4.12.
                            Headings should use 1.2 to 1.3 line-height. Paragraph spacing should be 2em
                            between paragraphs. Letter spacing should avoid condensing beyond negative
                            0.05em as this impacts readability.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For paragraphs, set line-height to 1.5 and margin-bottom to 2em. For
                            headings h1 through h3, use 1.3 line-height and add 1.5em margin-top for
                            proper spacing.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Font Weight
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            The minimum font weight for body text should be 400, which is regular
                            weight. Thin weights from 100 to 300 should be avoided entirely or only used
                            at 24 pixels and larger. Bold text should use weight 600 to 700 to ensure
                            sufficient visual contrast.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            All-Caps Usage
                        </h3>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Avoid text-transform uppercase on navigation links and body text. All-caps
                            text is harder to read and screen readers may spell out each letter. If
                            uppercase is necessary for design reasons, add letter-spacing of 0.05em and
                            reduce font-size to 0.875rem to improve legibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Elements */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Interactive Elements
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Focus States
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            All interactive elements must have visible focus indicators. This is a
                            critical requirement. The default browser focus outline should never be
                            removed without providing a replacement.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For buttons on focus, use a 2 pixel solid outline in a color like blue with
                            2 pixel outline-offset. For custom focus states using focus-visible, combine
                            outline with box-shadow to create a prominent indicator. Ensure the focus
                            indicator has at least 3:1 contrast with the background.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Never globally remove outlines with asterisk colon focus outline none, as
                            this creates an immediate WCAG failure and makes keyboard navigation
                            impossible.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Keyboard Navigation
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Tab order must follow visual order. In a form, inputs should receive focus
                            in the sequence they appear visually. First name input gets tab 1, last name
                            gets tab 2, submit button gets tab 3.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Avoid using tabindex with positive integers as this breaks logical tab
                            order. A bad example would be using tabindex 3, 1, and 2 on buttons that
                            appear in a different visual sequence.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Provide skip links for main content. Add a link at the top of the page with
                            href pointing to main-content ID and text reading Skip to main content.
                            Position this link off-screen with absolute positioning and negative top
                            value, then bring it into view at top 0 on focus. Style it with high
                            contrast background and adequate padding.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Button & Link Best Practices
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Use buttons for actions and links for navigation. Buttons should have type
                            button or submit with onClick handlers for actions like Save Changes. Links
                            should have href attributes pointing to actual URLs for navigation like View
                            Profile.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Never use a link with href pound sign and onClick for actions. This should
                            be a button instead. Link text should be descriptive. Write Read more about
                            accessibility rather than Click here, as screen reader users often navigate
                            by links alone and need context.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Form Labels & Error Messages
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Every input needs an associated label. Use the label element with for
                            attribute matching the input's id. Mark required fields with aria-required
                            true. Connect error messages using aria-describedby pointing to the error
                            element's id. Error messages should have role alert so they're announced
                            immediately.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For the email field, create a label with for email, an input with id email
                            and aria-describedby email-error, and a span with id email-error, class
                            error, and role alert containing the error message.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Group related inputs using fieldset and legend. For a shipping address, wrap
                            street and city inputs in a fieldset with legend text Shipping Address.
                        </p>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            When an input has an error, add aria-invalid true and ensure the error
                            message is connected via aria-describedby.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content & Structure */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Content & Structure
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Heading Hierarchy
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Follow logical heading structure. Each page should have one h1 as the page
                            title. Under the h1, use h2 for major sections. Under each h2, use h3 for
                            subsections. Never skip heading levels.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            A good structure has h1 Page Title, followed by h2 Section 1, with h3
                            Subsection 1.1 and h3 Subsection 1.2 nested inside, then h2 Section 2 at the
                            same level.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            A bad structure skips from h1 directly to h4, which breaks the document
                            outline and confuses assistive technology.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Rules to follow: use one h1 per page, don't skip heading levels, don't use
                            headings purely for visual styling, and ensure headings describe the content
                            they introduce rather than using generic text.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Alt Text Guidelines
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For informative images like charts, provide descriptive alt text explaining
                            what the image shows. For a bar chart, write something like Bar chart
                            showing 40 percent increase in sales from Q3 to Q4.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Decorative images that add no information should have empty alt text with
                            just alt equals empty quotes. This tells screen readers to skip the image
                            entirely.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Functional images used as buttons or links need alt text describing the
                            action. A search icon link should have alt Search.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Complex images like infographics need longer descriptions. Use a figure
                            element with the image, add aria-describedby pointing to a figcaption id,
                            and provide detailed explanation in the caption.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For icons with visible text labels, mark the icon as aria-hidden true since
                            the text provides the necessary information. A delete button should have the
                            SVG icon hidden and a span with text Delete.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Semantic HTML
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Use proper semantic elements instead of divs. Structure pages with header
                            containing nav with aria-label Main navigation, main containing article and
                            aside elements, and footer at the bottom.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Inside nav, use proper list structure with ul and li elements containing
                            links.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Avoid div soup where everything is a div with classes. Generic divs with
                            class header, class nav, and class nav-item provide no semantic meaning to
                            assistive technology.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Use article for self-contained content, aside for complementary content with
                            aria-label describing its purpose, section for thematic grouping, and nav
                            specifically for navigation blocks.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Reading Order
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Visual order should match DOM order. In a card component, the h2 title
                            should appear first in the markup and visually, followed by the paragraph
                            description, then the button. This creates a logical reading flow.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Don't rely on CSS flexbox order or grid placement to reorder content. If
                            your DOM has the button first, heading second, and paragraph third, but uses
                            CSS order to rearrange them visually, screen reader users will experience
                            them in the wrong sequence.
                        </p>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Always structure your HTML in the order users should encounter content, then
                            use CSS only for minor visual adjustments that don't change reading
                            sequence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Motion & Animation */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Motion & Animation
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Reduced Motion Support
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Respect the prefers-reduced-motion media query. When users have requested
                            reduced motion in their system settings, disable or minimize animations.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            In your CSS, create a media query for prefers-reduced-motion reduce and set
                            animation-duration to 0.01ms, animation-iteration-count to 1, and
                            transition-duration to 0.01ms on all elements.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For essential animations like loading indicators, provide alternative static
                            representations. A loading spinner should change to a static indicator when
                            reduced motion is enabled. Fade-in animations should skip directly to full
                            opacity.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            In JavaScript, detect the user preference by checking window.matchMedia for
                            prefers-reduced-motion reduce. Store this in a variable and only add
                            animation classes when the user hasn't requested reduced motion.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Animation Duration Limits
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Keep short transitions between 200 and 300 milliseconds. Medium animations
                            should run 300 to 500 milliseconds. Long animations should max out at 500
                            milliseconds or provide controls to pause or stop them. For any animation
                            longer than 5 seconds, provide pause and stop controls.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Flashing Content
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Never flash content more than 3 times per second. Avoid large bright flashes
                            that could trigger seizures. Test any flashing or strobing content with
                            PEAT, the Photosensitive Epilepsy Analysis Tool, before shipping.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Auto-play Considerations
                        </h3>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            If you must auto-play video, mute it by default and provide visible controls
                            immediately nearby. Better still, avoid auto-play entirely and use the
                            controls attribute to give users full control. For any auto-playing content
                            including carousels or slideshows, provide pause buttons and ensure keyboard
                            users can access them easily.
                        </p>
                    </div>
                </div>
            </section>

            {/* Screen Reader Support */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Screen Reader Support
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            ARIA Labels
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For buttons with only icons, use aria-label to provide text description. A
                            close button with an X icon needs aria-label Close dialog.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For links to files, include format and size information in the label. A PDF
                            download link should have aria-label Download Q4 2024 Financial Report PDF
                            2MB.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For search inputs, even with a visible label, add aria-label to provide
                            specificity like aria-label Search products while the visible label just
                            says Search.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Visually Hidden Text
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Create a screen reader only CSS class that positions content absolutely with
                            1 pixel width and height, zero padding, negative 1 pixel margin, overflow
                            hidden, and clip rect 0 0 0 0. Add white-space nowrap and border-width 0.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Apply this class to spans that provide context for screen readers without
                            cluttering the visual design. An icon button can have a span with class
                            sr-only containing the text Add to cart while the icon itself is marked
                            aria-hidden true.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Landmark Regions
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Use HTML5 landmark elements including header for banner, nav for navigation,
                            main for main content, aside for complementary content, and footer for
                            content info.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            When you have multiple landmarks of the same type, label them distinctly. If
                            you have primary navigation and footer navigation, add aria-label Main
                            navigation to one and aria-label Footer navigation to the other.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For custom landmarks, use ARIA roles. A search form can be wrapped in a div
                            with role search containing the search input.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Dynamic Content Announcements
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Use live regions to announce dynamic updates. For status messages like Item
                            added to cart, wrap the text in a div with role status and aria-live polite.
                            The polite setting waits for the user to finish their current task before
                            announcing.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For urgent alerts like payment failures, use role alert and aria-live
                            assertive to interrupt and announce immediately.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For loading states, add aria-busy true to the container and update it to
                            false when loading completes. Combine this with aria-live polite to announce
                            state changes.
                        </p>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            In React, maintain message state and update it based on user actions. When a
                            user clicks save, set the message to Saving, await the save operation, then
                            set it to Saved successfully. Render this message in a div with role status
                            and aria-live polite so it's announced without being visually intrusive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testing Checklist */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Testing Checklist
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Screen Reader Testing
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For macOS VoiceOver, enable it with Command F5. Navigate using Control
                            Option Arrow keys. Read all content with Control Option A. Open the rotor to
                            jump between headings and links using Control Option U.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For Windows, download NVDA free from nvaccess.org. Navigate with arrow keys,
                            read all with NVDA Down Arrow, and open the elements list with NVDA F7.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For iOS VoiceOver, go to Settings Accessibility VoiceOver to enable. Swipe
                            right and left to navigate between elements. Double-tap to activate buttons
                            and links.
                        </p>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            For Android TalkBack, go to Settings Accessibility TalkBack to enable. Swipe
                            right and left to navigate. Double-tap to activate.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Keyboard Navigation Verification
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Tab through the entire page and verify the order makes sense. Confirm you
                            can reach all interactive elements. Check that focus indicators are visible
                            on every interactive element. Verify you can operate all controls using only
                            keyboard. Test Shift Tab to move backwards. Test Enter and Space on buttons.
                            Test Escape to close modals and menus.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Color Contrast Tools
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            In browsers, use Chrome DevTools Lighthouse or Firefox Accessibility
                            Inspector. Online tools include WebAIM Contrast Checker and Coolors Contrast
                            Checker. In design tools, use Stark for Figma or Color Oracle. For automated
                            checking, install axe DevTools browser extension.
                        </p>

                        <h3
                            className="text-lg font-semibold mb-3 mt-6"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Automated Testing Tools
                        </h3>
                        <p
                            className="mb-4"
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Install axe-core react and jest-axe as dev dependencies using npm. In your
                            tests, import axe and toHaveNoViolations from jest-axe, extend expect with
                            toHaveNoViolations, then write tests that render your component, run axe on
                            the container, and expect results to have no violations.
                        </p>
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Additional recommended tools include pa11y for command-line accessibility
                            testing, Lighthouse CI for automated audits in GitHub Actions, axe DevTools
                            browser extension for manual testing, and WAVE browser extension for visual
                            feedback on accessibility issues. Add an accessibility test script to
                            package.json that runs pa11y-ci with a configuration file. Run this regularly
                            as part of your CI/CD pipeline.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Reference Checklist */}
            <section className="mb-12">
                <h2 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>
                    Quick Reference Checklist
                </h2>
                <div className="space-y-6">
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border-default)",
                        }}
                    >
                        <p
                            style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
                        >
                            Before shipping any feature, verify color contrast meets WCAG AA with 4.5:1
                            for text and 3:1 for UI components. Ensure all interactive elements are
                            keyboard accessible. Confirm focus indicators are visible on all interactive
                            elements. Check all images have alt text or empty alt attribute for
                            decorative images. Verify headings follow logical hierarchy. Confirm forms
                            have associated labels. Check ARIA is used correctly for landmarks, live
                            regions, and labels. Ensure the interface respects prefers-reduced-motion.
                            Test with keyboard only navigation. Test with a screen reader. Verify
                            automated tests are passing using axe or pa11y. Check for no console errors
                            from accessibility tools.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
