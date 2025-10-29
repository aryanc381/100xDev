type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handlinmg event: ${event}`)
}

// handleEvent('scroll'); not allowed
handleEvent('click');