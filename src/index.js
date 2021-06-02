import * as $ from 'jquery';
import Post from '@models/Post';
import WebPackLogo from '@/assets/webpack-logo';
import '@/styles/styles.css';

const post = new Post('Webpack title', WebPackLogo);

$('pre').html(post.toString());

console.log('Post to String:' + post.toString());

