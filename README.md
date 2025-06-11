# Family Health Practice - AISD Website

## Overview
This project is a simple, responsive single-page website for the Family Health Practice at the American International School Dhaka (AISD). It provides information about the clinic's staff, services, hours, fees, and important notices. The design is clean, professional, and aims to be easily accessible.

## Project Structure
The project consists of the following main files and directories:

*   `index.html`: The main HTML file containing all the content and structure of the website.
*   `css/`: This directory contains the stylesheet for the website.
    *   `style.css`: The primary CSS file that defines the visual appearance, layout, and responsive design.
*   `js/`: This directory contains the JavaScript file for interactive functionalities.
    *   `script.js`: Handles features like the mobile menu toggle, back-to-top button visibility, active navigation link highlighting, and dynamically updating the footer year.
*   `images/`: This directory is intended to store all local images used on the website (e.g., staff photos, icons). Currently, `index.html` primarily uses placeholder URLs from Pexels, but local images should be placed here for production.

## Customization Guide

### Changing Text Content
All text content displayed on the website is directly embedded within the `index.html` file. To change any text, you will need to edit this file using a text editor.

Here are examples of where to find content for key sections:

*   **Hero Title/Subtitle:**
    *   Locate the `<header id="hero">` section.
    *   The main title is within the `<h1>` tag.
    *   The subtitle/description is within the `<p>` tag directly following the `<h1>`.
*   **Important Notices:**
    *   Find the `<section id="important-notice">`.
    *   Each notice is within a `div` with class `.notice-item`.
    *   Headings are in `<h3>` and paragraph text in `<p>` tags within each `.notice-item`.
*   **Staff Names/Titles:**
    *   Look for `<section id="our-staff">`.
    *   Each staff member is represented by a `div` with class `.staff-card`.
    *   The name is in an `<h3>` and the title/role in a `<p class="staff-title">`.
*   **Service Names:**
    *   In `<section id="our-services">`.
    *   Each service is a `div` with class `.service-card`.
    *   The service name is in an `<h3>` tag.
*   **Clinic Hours:**
    *   Within `<section id="clinic-hours">`, find the `div` with class `.hours-text`.
    *   Days are in `<p class="days">` and times in `<p class="times">`.
    *   The special note is within `<div class="special-note">`.
*   **Fees & Payment Details:**
    *   Inside `<section id="fees-payment">`.
    *   Fee items are within `ul.fee-list li` elements in their respective `.fee-category` divs.
    *   Payment policies are in `<p>` tags within `<div class="payment-info">`.
*   **Contact Information in Footer:**
    *   Find the `<footer id="footer">`.
    *   Contact details (address, phone, email) are within `<div class="contact-info">` inside `<p>` tags. Remember to update `tel:` and `mailto:` links as well.

**Important:** When editing `index.html`, be careful not to accidentally delete or alter HTML tags (e.g., `<div>`, `<p>`, `<a>`), as this can break the structure or styling of the page.

### Changing Images

#### Hero Background Image
*   The hero background image is set in the `css/style.css` file.
*   Find the `#hero` CSS selector.
*   Modify the `background-image: url('...');` property with the path to your new image.
    ```css
    #hero {
        /* ... other styles ... */
        background-image: url('https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); /* Replace this URL */
        /* ... other styles ... */
    }
    ```
*   **Recommended size:** At least 1920px wide, landscape orientation, to ensure it looks good on large screens.

#### Staff Images
*   Staff images are defined in `index.html` within the `<section id="our-staff">`.
*   Each image is an `<img>` tag with class `.staff-image` inside a `.staff-card`.
*   Currently, the `src` attributes point to Pexels.com URLs. Replace these with paths to your local images. For example:
    `src="https://images.pexels.com/..."` becomes `src="images/your-staff-member.jpg"`
*   **Recommended size:** Square aspect ratio (e.g., 200x200 pixels or larger). The CSS uses `border-radius: 50%;` to make them circular and `object-fit: cover;` to ensure the image covers the area nicely.

#### Service Icons
*   Service icons are in `index.html` within `<section id="our-services">`.
*   Each icon is an `<img>` tag with class `.service-icon` inside a `.service-card`.
*   Replace the Pexels.com `src` URLs with paths to your local icons (e.g., `images/your-icon.svg` or `images/your-icon.png`).
*   **Recommended size:** Square, around 60x60 to 100x100 pixels. SVG format is ideal for icons as they scale without losing quality.

#### Clinic Hours Image
*   This image is in `index.html` within `<section id="clinic-hours">`.
*   Find the `<img>` tag with class `.hours-image` inside `<div class="hours-image-container">`.
*   Replace the Pexels.com `src` URL with your local image path.
*   **Recommended size:** Depends on the image content, but a landscape orientation (e.g., 400x300 pixels or wider) would fit well.

#### General Image Advice
*   **Placement:** Place all your new local images in the `images/` directory.
*   **Alt Text:** When you change an image, make sure to update its `alt` attribute in `index.html` to accurately describe the new image for accessibility.
*   **Optimization:** Optimize your images for the web (compress them using tools like TinyPNG or ImageOptim) to ensure they load quickly and don't slow down the website.

### Changing Color Palette
The website's color scheme is primarily controlled by CSS variables defined in `css/style.css`.

*   Open `css/style.css`.
*   At the beginning of the file, you'll find the `:root` selector:
    ```css
    :root {
        --primary-color: #2C5F8C;   /* Deep blue - Used for hero background, headings, links */
        --secondary-color: #FFFFFF; /* Clean white - Used for text on dark backgrounds, card backgrounds */
        --accent-color: #4A9B8E;    /* Soft teal/green - Used for highlights, buttons, borders */
        --text-color: #333333;      /* Dark gray - Main text color on light backgrounds */
        --background-color: #F8F9FA;/* Light gray/off-white - Main page background, card backgrounds */
        --light-gray: #dddddd;      /* For borders or subtle lines */
    }
    ```
*   To change the site's colors, modify the hexadecimal color codes (e.g., `#2C5F8C`) for these variables. The comments indicate where each color is generally used.

## Running the Website
This website is built with plain HTML, CSS, and client-side JavaScript.

1.  **Direct File Opening:**
    *   Simply navigate to the project directory on your computer.
    *   Double-click the `index.html` file. It should open in your default web browser.

2.  **Using a Local Web Server (Recommended for Development):**
    *   While direct file opening works, some browser features or JavaScript functionalities (especially those involving AJAX or more complex routing, though not heavily used in this specific project) behave more reliably when a site is served via HTTP.
    *   If you have Node.js installed, you can use a simple command like `npx serve` in the project's root directory.
    *   Many code editors (like VS Code with the "Live Server" extension) offer built-in tools to serve static files locally.

For this particular project, direct opening of `index.html` is sufficient for viewing and most interactions.
