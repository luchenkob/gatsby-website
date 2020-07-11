module.exports = {
  linkResolver(doc) {
    if (doc.type === 'policy') {
      return `/policy/${doc.uid}`;
    }

    return '/';
  },
};
