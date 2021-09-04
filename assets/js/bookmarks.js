let bookmarks = [{
    'system': 'OS',
    'name': 'Tele',
    'url': 'https://alplox.github.io/tele/'
},
{
    'system': 'Host',
    'name': 'StartpagePlox',
    'url': 'https://alplox.github.io/StartpagePlox/'
},
{
    'system': 'Kernel',
    'name': 'Google News',
    'url': 'https://news.google.com'
},
{
    'system': 'Uptime',
    'name': 'Microsoft News',
    'url': 'https://microsoftnews.msn.com/'
},
{
    'system': 'Packages',
    'name': 'GitHub',
    'url': 'https://github.com/'
},
{
    'system': 'Shell',
    'name': 'Gitlab',
    'url': 'https://gitlab.com/'
},
{
    'system': 'Resolution',
    'name': 'Youtube',
    'url': 'https://youtube.com/'
},
{
    'system': 'DE',
    'name': 'Twitch',
    'url': 'https://www.twitch.tv/'
},
{
    'system': 'WM',
    'name': 'Spotify',
    'url': 'https://open.spotify.com/'
},
{
    'system': 'WM Theme',
    'name': 'Soundcloud',
    'url': 'https://soundcloud.com/'
},
{
    'system': 'Terminal',
    'name': 'Photopea',
    'url': 'https://www.photopea.com/'
},
{
    'system': 'CPU',
    'name': 'Temp-mail',
    'url': 'https://temp-mail.org/'
},
{
    'system': 'GPU',
    'name': 'Virustotal',
    'url': 'https://www.virustotal.com/'
},
{
    'system': 'Memory',
    'name': '/r/startpages',
    'url': 'https://old.reddit.com/r/startpages/'
},
{
    'system': 'Source Code',
    'name': 'rice',
    'url': 'https://github.com/Alplox/rice'
}
]
//Bookmarks
const bookmarkContainer = document.getElementById('bookmark-container');
    bookmarks.forEach(bookmark => {
        const a = document.createElement('a');
            a.classList.add('link');
            a.href = bookmark.url;
            a.setAttribute('rel','nofollow noreferrer noopener')
            a.textContent = bookmark.name;
        const p = document.createElement('p');
            p.textContent = `${bookmark.system}: `
            p.append(a)
        bookmarkContainer.append(p)
    });
//Flip Créditos
const flipBTN = document.getElementById('flip');
const flipContainer = document.getElementById('flip-container');
    flipBTN.onclick = () => {
        flipContainer.classList.toggle('hover');
    };