# TAU Icon Generator Website

This is a static HTML/CSS website for TAU Icon Generator that can be hosted anywhere without requiring Node.js or a build process.

## Files Included

- `index.html` - Home page with hero, features, and CTAs
- `product.html` - Product details and purchase page
- `guide.html` - OpenAI API setup guide
- `contact.html` - Contact information and FAQ
- `styles.css` - All styles for the website

## Features

- Fully responsive design
- Dark theme with cyan accents
- No JavaScript dependencies
- SEO-friendly semantic HTML
- Cross-browser compatible

## Hosting

You can host these files on any web server:

1. **GitHub Pages**: Upload files to a GitHub repository and enable Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Deploy with `vercel --prod`
4. **Traditional hosting**: Upload via FTP to any web host

## PayPal Integration

To add PayPal checkout functionality:

1. Go to [PayPal Developer](https://developer.paypal.com/)
2. Create a button for $20 payment
3. Replace the `.paypal-placeholder` div in `product.html` with your PayPal button code

## Customization

### Colors
Edit the CSS variables in `styles.css` under `:root` to change the color scheme.

### Content
All content is in plain HTML and can be edited directly in the `.html` files.

### Email
Update `support@tau-tools.dev` to your actual support email address.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

All rights reserved © TAU Icon Generator
