import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from './layout/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import post1 from './scripts/blog-post.1.md';
import post2 from './scripts/blog-post.2.md';
import post3 from './scripts/blog-post.3.md';
import JobWanted from '../img/jobwanted.jpeg';
import Netflix from '../img/netflix.jpg';
import SocialLogin from '../img/socialLogin.jpeg';
import ShoppingMall from '../img/shopping mall.jpg';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'About Me', url: '#' },
    { title: 'Skills', url: '#' },
    { title: 'Project', url: '#' },
    { title: 'Contact', url: '#' },
];

const mainFeaturedPost = {
    title: '김두완의 포트폴리오',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'Job_Wanted Project',
        date: 'Dec 2019 ~ ',
        description:
            'React + Redux + Node.js + Express.js + MongoDB를 이용하여 로그인 및 게시판 기능 등이 구현된 간단한 구직 사이트',
        imageText: 'Image Text',
    },
    {
        title: 'Netflix Project',
        date: 'Nov 2019',
        description:
            'React.js + 공유 Api를 이용하여 구현된 간단한 영화 소개 사이트',
        imageText: 'Image Text',
    },
    {
        title: 'Social_login Project',
        date: 'Oct 2019',
        description:
            'MongoDB + Express.js + Node.js를 이용하여 facebook, google 로그인 기능이 추가된 프로젝트',
        imageText: 'Image Text',
    },
    {
        title: 'Shopping_mall Project',
        date: 'Aug 2019 ~ Sep 2019',
        description:
            'MongoDB + Express.js + Node.js를 이용하여 회원가입, 로그인, 상품 등록/제거, 게시판 글 추가, 좋아요/싫어요 기능을 추가한 프로젝트',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const posts = [post1, post2, post3];

const sidebar = {
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Instagram', icon: InstagramIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Portfolio" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map(post => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Sidebar
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer title="Portfolio" description="Write something in Develop blog" />
        </React.Fragment>
    );
}