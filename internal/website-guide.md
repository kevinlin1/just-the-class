---
layout: default
title: Website Guide
nav_exclude: true
search_exclude: true
---

# Website Guide
{: .no_toc}

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Text Formatting
This page is intended to help maintainers of the website make edits, and can serve as a cheat sheet for commands.

This website is written using *Markdown*. Markdown is a tongue-in-cheek middle finger to HTML (Hypertext Mark*up* Language), emphasizing clean syntax and easy formatting. Markdown is the choice of formatting for many online communities, like Reddit, Stack Overflow, Discord (to some extent), and Github Pages.

Use hashtags `#` to create different heading levels.

```markdown
# Heading 1
## Heading 2
### Heading 3
```

Use a single asterisk for *italics* and two for **bold**.
```markdown
Use a single asterisk for *italics* and two for **bold**.
```

To indent an entire body of text, use the right arrow >.

> This is an indented body of text. It can be used for things like quotes. *If you combine me with italics, then I can look super professional.*

> - Someone famous, 1900-1905

```markdown
> This is an indented body of text. It can be used for things like quotes. *If you combine me with italics, then I can look super professional.*
> -Someone famous probably, 1900-1905
```

---

## Linking
To link content, use the syntax `[linked text](url)`. For instance, [go to Google](https://google.com).

```markdown
For instance, [go to Google](https://google.com).
```

To force a link to open in a new tab, add `{:target="_blank"}` to the end. Go to [Google in a new tab](https://google.com){:target="_blank"}.
```markdown
Go to [Google in a new tab](https://google.com){:target="_blank"}.
```

---

## Lists
```markdown
- Use a hyphen to
- create a bulleted
- list.
```
- Use a hyphen to
- create a bulleted
- list.


```markdown
1. Use numbers to
2. create an ordered
3. list.
```
1. Use numbers to
2. create an ordered
3. list.

```markdown
- You can create
  1. Nested series
    - of
  2. ordered and unordered
- lists as well
  1. if you really
  2. want to
  3. for some
    - interesting
    - reason
  4. lorem
- ipsum dolor sit amet.
```

- You can create
  1. Nested series
    - of
  2. ordered and unordered
- lists as well
  1. if you really
  2. want to
  3. for some
    - interesting
    - reason
  4. lorem
- ipsum dolor sit amet.

---

## Announcements

If you want to make an announcement, put two vertical pipe bars on either side of the message.

| This is an announcement. We officially got acquired by AI2! |

```markdown
| This is an announcement. We officially got acquired by AI2! |
```

---

## Horizontal Rules

To put a horizontal rule, use the `---` command.

---

## Table of Contents
In order to generate a table of contents for a web page, paste the following code:

```
---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
```

---

## Images
To put an image, use the syntax `![alt text](https://imgurl.jpg)`. If you have an image pasted to the clipboard, you can ctrl/cmd+V it into the editor and GitHub will upload for you.

To resize an image, use the HTML command
```html
<img src="imgurl" width="60%" />
```
You can also set the `height` parameter if desired, but generally `width` is a better consistent parameter.

If you want to center the images, wrap all images in `<center>...</center>` tags, like such:
```html
<center>
<img src="imgurl" width="60%" />
</center>
```


---

## Embedding Media

To embed media, use the following syntax: `<iframe src="link to media" width="100%" height="400" style=style="border:1px solid black;"></iframe>`. You can adjust the width and height parameters to change the size of the media embed.
```markdown
<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-1/NNs as Minds.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>
```

<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-1/NNs as Minds.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

---

## Tables

```markdown
| Column 1 | Column 2 | Column 3|
| --- | --- | --- |
| a | b | c |
| d | e | f |
| g | h | i |
```

| Column 1 | Column 2 | Column 3|
| --- | --- | --- |
| a | b | c |
| d | e | f |
| g | h | i |


