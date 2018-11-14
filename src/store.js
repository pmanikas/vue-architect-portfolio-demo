import Vue from 'vue';
import Vuex from 'vuex';
import imageNotFound from '@assets/img/image-not-found.jpg'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project: {},
    cards: []
  },

  mutations: {
    setProjectCards(state, cards) {
      state.cards = cards;
    },
    setProject(state, project) {
      state.project = project;
    }
  },

  actions: {
    getProjectCards({commit, state}) {
      return Vue.prototype.$prismic.client.query(
        Vue.prototype.$prismic.Predicates.at('document.type', 'projects'), 
        { orderings: '[document.first_publication_date]' }
      ).then(response => {
        // console.log(response);
        const cards = response.results.map(({data, uid}) => {
          return {
            uid: uid,
            title: data.title[0].text,
            small: (data.cover.small ? data.cover.small.url : imageNotFound),
            cover: (data.cover ? data.cover.url : imageNotFound),
          }
        });
        commit('setProjectCards', cards);
        // console.log('setProjectCards', cards);
      }).catch((error) => {
        console.log(error);
        const cards = {
          title: 'Please try again later',
          cover: imageNotFound,
        };
        commit('setProjectCards', cards);
        return cards
      });
    },

    getProject({commit, state}, uid) {
      return Vue.prototype.$prismic.client.getByUID('projects', uid)
        .then((response) => {
          // console.log('project newQuery response', response);
          const project = {
            uid: uid,
            title: response.data.title[0].text,
            description: response.data.description || null,
            cover: (response.data.cover ? response.data.cover.url : imageNotFound),
            smallCover: (response.data.cover.small ? response.data.cover.small.url : imageNotFound),
            gallery: response.data.gallery || null
          };
        commit('setProject', project);
        // console.log('project newQuery', project);
        return project
      }).catch((error) => {
        console.log(error);
        const project = {
          title: 'Please try again later',
          cover: imageNotFound,
        };
        commit('setProject', project);
        return project
      });
    },
  },

  getters: {
    relatedProjectCards(state) {
      return uid => state.cards.filter(card => {
        return card.uid !== uid;
      })
    }
  }
});