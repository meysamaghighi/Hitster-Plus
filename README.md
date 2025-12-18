# Hitster Plus

A web app that generates bonus questions for the Hitster board game.

## Features

- 🎵 **300 songs** from curated Spotify playlist
- 🔍 **Search functionality** to quickly find songs by artist or title
- ❓ **Custom trivia questions** for popular songs
- 🎲 **Smart fallback questions** for all other songs
- 📱 **Mobile-friendly** dark theme interface

## Live App

Access at: `https://meysamaghighi.github.io/Hitster-Plus/`

## Usage

1. Type in the search box to filter songs (optional)
2. Select a song from the dropdown
3. Click "Show questions"
4. Display questions to players during the game

## Files

- `index.html` - Main web interface with search and display
- `songs.js` - Database of 300 songs with artist, title, and year
- `logic.js` - Question generator with custom trivia bank

## Adding Songs

1. Export your Spotify playlist to CSV using [Exportify](https://exportify.net/)
2. Update `songs.js` with the new songs
3. Optionally add custom questions in `logic.js`
4. Push to GitHub - changes go live automatically