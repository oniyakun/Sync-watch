/**
 * __sync_watch__ can be one of the following:
 * * a url (string)
 * * many url (string[])
 * * an object (See ./src/Comps/gun.d.ts)
 */
{
    let servers = [
        // use public gun server?
        (() => (
            console.warn('You are using public gun server. Maybe you should build your own one'),
            'https://gungame.herokuapp.com/gun'
        ))(),
    ]
    if (location.hostname === 'localhost') {
        servers.push('http://localhost:8765/gun')
    } else {
        servers.push('https://gungame.herokuapp.com/gun')
    }
    window.__sync_watch__ = servers
}
