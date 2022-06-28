const pushAWAd = () =>{
    // past your line item code here and dont forget to remove parent in your code
}
// check the ads loaded
const docBodyNode = document.querySelector('body')

function callback(mutationsList, observer) {
    // console.log('Mutations:', mutationsList)
    // console.log('Observer:', observer)
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            // alert('Ch-ch-ch-changes!')
            !docBodyNode.classList.contains('ads-not-loaded') && pushAWAd()
        }
    })
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(docBodyNode, { attributes: true })