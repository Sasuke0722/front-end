const app = Vue.createApp({
    data() {
      return {
        posts: [
          {
            title: 'First post',
            content: 'This is the first post on my blog.',
            date: '2023-04-05'
          },
          {
            title: 'Second post',
            content: 'This is the second post on my blog.',
            date: '2023-04-04'
          },
          {
            title: 'Third post',
            content: 'This is the third post on my blog.',
            date: '2023-04-03'
          }
        ]
      }
    },
    template: `
      <div>
        <h1>Vue3 Blog</h1>
        <ul>
          <li v-for="post in posts">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <p><em>{{ post.date }}</em></p>
          </li>
        </ul>
      </div>
    `
  })
  
  app.mount('#app')
  