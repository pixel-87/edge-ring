Live Webring Directory & Router: `https://pixel-87.github.io/edge-ring/`

## 📁 Repository Structure

```
edge-ring/
├── index.html        # Public landing page, member directory & widget code generator
├── go/
│   └── index.html    # Static router handling client-side redirects (?member=id&dir=next|prev|random)
├── embed.js          # Custom script widget that members can embed on their websites
├── members.json      # Array of webring members in loop order
└── README.md         # Documentation & setup guide
```


Paste this script snippet into your site footer or HTML body (replace `ed` with your member `id`):

```html
<script src="https://pixel-87.github.io/edge-ring/embed.js" data-member="ed" data-theme="dark"></script>
```
