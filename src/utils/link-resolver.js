export default function (doc) {
    // Return the path depending on Prismic Document's type
    // If it is a Single Custom Type with the API ID of "home"
    if (doc.type === 'article') {
        return '/blog/' + doc.uid;
    }
    // If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)
    if (doc.type === 'page') {
        return '/page/' + doc.uid;
    }

    // Default to the root
    return '/';
}