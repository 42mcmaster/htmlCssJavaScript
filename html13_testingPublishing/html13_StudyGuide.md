# Lesson 13 Study Guide: Testing, Protocols & Publishing

## Vocabulary (20 terms)

1. **HTTP** — HyperText Transfer Protocol; unsecure protocol for transferring web data over the internet
2. **HTTPS** — HTTP Secure; encrypted protocol for safe data transfer using SSL/TLS
3. **FTP** — File Transfer Protocol; older method for uploading/downloading files to servers
4. **TCP/IP** — Transmission Control Protocol/Internet Protocol; foundation of internet communication
5. **DNS** — Domain Name System; translates human-readable domain names (google.com) to IP addresses
6. **Domain** — Human-readable name for a website (example.com)
7. **IP Address** — Unique numerical identifier for devices on the internet (192.168.1.1)
8. **URL** — Uniform Resource Locator; complete web address including protocol (https://example.com/page)
9. **Static Site** — Website with fixed content served the same way to all visitors (portfolio, blog)
10. **Dynamic Site** — Website that generates content based on database or user input (Facebook, Gmail)
11. **Server** — Computer that hosts and delivers web files to users
12. **Client** — User's device (computer, phone) that requests and displays web pages
13. **Browser Rendering** — Process of parsing HTML/CSS/JS and displaying the final page
14. **W3C** — World Wide Web Consortium; organization that sets web standards
15. **Validator** — Tool that checks code against official HTML/CSS standards
16. **Cross-Browser Testing** — Testing a website in multiple browsers to ensure compatibility
17. **DevTools** — Developer Tools built into browsers for inspecting, debugging, and testing code
18. **Git** — Version control system for tracking changes and managing code versions
19. **Repository** — Folder/project tracked by git, can be hosted on GitHub
20. **GitHub Pages** — Free hosting service for static websites directly from a GitHub repository

## Quick Cheat Sheet

### Web Protocols at a Glance
- **HTTPS** is standard today (secure, encrypted)
- **HTTP** is outdated (insecure, data visible)
- **DNS** = phone book of the internet
- **TCP/IP** = how data gets delivered in packets

### Static vs. Dynamic
| Aspect | Static | Dynamic |
|--------|--------|---------|
| Content | Same for all | Changes per user |
| Speed | Fast | Slower |
| Complexity | Simple | Complex |
| Examples | Blogs, portfolios | Gmail, Netflix, Facebook |

### Testing Checklist
- HTML validation: https://validator.w3.org/
- CSS validation: https://jigsaw.w3.org/css-validator/
- Test in Chrome, Firefox, Safari
- Check mobile responsive view
- Run DevTools console check

### Git Commands (Must Know)
```
git init              # Start tracking folder
git add .             # Stage all changes
git commit -m "msg"   # Save snapshot
git push              # Upload to GitHub
```

### GitHub Pages Workflow
1. Create repository (username.github.io)
2. Add files to repository
3. Push code via git
4. Enable Pages in Settings
5. Wait 2 minutes
6. Site is LIVE at https://username.github.io

## ODE Competencies Covered

### 6.5.1 — Web Standards & Protocols
- Understand HTTP/HTTPS, TCP/IP, DNS
- Know difference between static and dynamic sites
- Understand browser rendering process

### 6.5.11 — Cross-Browser Compatibility
- Test websites in multiple browsers
- Use DevTools for debugging
- Understand that browsers render slightly differently

### 6.5.12 — Publish to Web Server
- Use GitHub Pages as hosting
- Deploy via git (add, commit, push)
- Verify live deployment

### 6.5.4 — CMS Overview
- Know that WordPress, Wix, Squarespace exist
- Understand CMS vs. hand-coded websites
- Recognize when CMS is appropriate vs. custom code

## Key Concepts to Remember

1. **The Web is Just Requests & Responses**
   - Browser: "Give me example.com"
   - Server: "Here's the HTML"
   - Browser: "Got it! Let me render it"

2. **Always Use HTTPS** (Lock icon = secure)

3. **Validation is Not Optional**
   - W3C validators catch errors you'll miss
   - Errors can break functionality in some browsers

4. **Testing is Quick But Essential**
   - 10 minutes testing saves hours of debugging
   - Multiple browsers = catches cross-browser bugs

5. **Git + GitHub Pages = Free Hosting**
   - No servers to manage
   - No monthly fees
   - Perfect for portfolios and projects

## Study Tips

- **Practice:** Deploy a simple site to GitHub Pages yourself
- **Experiment:** Open DevTools in your favorite website (Ctrl+Shift+I or Cmd+Option+I)
- **Validate:** Run your projects through W3C validator to see real errors
- **Test:** Open your site in Chrome, Firefox, Safari, and mobile browsers side-by-side

## Practice Questions

1. What's the difference between HTTP and HTTPS?
2. How does DNS help you visit a website?
3. When would you choose a static site over a dynamic site?
4. What does "browser rendering" mean?
5. Why test in multiple browsers?
6. What does git do?
7. What are the four main git commands?
8. How do you deploy to GitHub Pages?
9. What's a W3C validator?
10. What's the difference between a server and a client?
