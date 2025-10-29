function delayedCall(fn: () => void): void {
    console.log('First function');
    setTimeout(fn, 5000);
}

delayedCall(function() {
    console.log('Second function')
})