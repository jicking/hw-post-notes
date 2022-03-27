import Vue from 'vue'

export default () => {
  Vue.filter('truncateText', function (value) {
    const maxLength = 80;
    if (value.length < maxLength)
      return value
    
    return `${value.slice(0, maxLength)}...`
  })
}
