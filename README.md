# Blog Template: Bun + Svelte + Markdown

This repository contains a blog template built using **Bun**, **Svelte** It provides an easy-to-extend foundation for creating static blogs with modern tools.

## Features

- **Blazing Fast Development**: Powered by [Bun](https://bun.sh/) for a high-performance JavaScript runtime.
- **Elegant UI**: Built with [Svelte](https://svelte.dev/), ensuring a reactive and smooth user experience.
- **Markdown-Based Content**: Write your blog posts using Markdown for simplicity and portability.
- **Static Site Generation**: Efficiently compiles your blog into static files, perfect for deployment on CDNs or static hosting platforms.
- **Easy Customization**: The modular design makes it straightforward to adapt the template to your needs.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Install [Bun](https://bun.sh/) on your system.
- Ensure Node.js (optional) is installed for fallback support.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrBlueBlobGuy/blog-template-bun-svelte-md.git
   cd blog-template-bun-svelte-md
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

### Running the Project

Start the development server with:

```bash
bun dev
```

The server will start, and you can view your blog at `http://localhost:3000`.

### Building for Production

To build the static files for production:

```bash
bun build
```

The output will be available in the `dist` folder.

### File Structure

```plaintext
blog-template-bun-svelte-md/
├── src/
│   ├── lib/
|   ├── posts/            # Markdown files for blog content
│   ├── routes/       # Application routes and
├── static/           # Static assets (e.g., images, icons)
├── bunfig.toml       # Bun configuration file
└── README.md         # Project documentation
```

## Adding Blog Posts

1. Create a new Markdown file in the `src/posts/` directory.
2. Add frontmatter metadata at the top of the file:

   ```markdown
   ---
   title: "My Awesome Post"
   date: "2024-11-15"
   description: "A short summary of the post."
   ---
   ```

3. Write your post content below the frontmatter.

4. The post will be automatically picked up and displayed on the blog.

## Customization
- Add a file `src/styles/[style-name].css` and import it into app.css (using gruvbox by default)
- Configure routing in the `src/routes/` directory.

## Deployment

Deploy your site easily with any static hosting service like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## Contributing

Feel free to fork the repository, open issues, or submit pull requests to contribute to the project. All contributions are welcome!

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

---