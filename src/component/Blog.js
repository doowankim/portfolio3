import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './layout/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'About Me', url: 'AboutMe' },
    { title: 'Project', url: 'Project' },
    { title: 'Skills', url: 'Skills' },
    { title: 'Contact', url: 'Contact' },
];

const mainFeaturedPost = {
    title: '김두완의 포트폴리오',
    description:
        "대학시절 때부터 호기심이 많은 성격에 만들어보았던 간단한 계산기 프로그램으로 무언가를 만드는 것에 흥미를 느끼게 되었고 " +
        "그 때부터 개발자를 꿈꾸게 되었습니다." +
        "그 중 JavaScript가 가지고 있는 가능성과 다양성에 매료되어 웹 어플리케이션 개발자가 되기위해 많은 노력을 하고 있습니다." +
        "저는 제 목표를 늘 성장하는 개발자로 삼아서 공부하고 있습니다. " +
        "경력을 쌓다가도 자기 실력에 만족하거나 남들이 인정해주는 것을 받아들이면 정체되기 때문에, " +
        "매 번 성장하려면 항상 겸손한 자세와 만족하지 않아야 한다고 생각합니다." +
        "그렇기 때문에 저는 꾸준히 공부하여 항상 성장하는 개발자로 남고 싶습니다.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'Job_Wanted Project',
        date: 'Dec 2019 ~ ',
        description:
            'React + Redux + Node.js + Express.js + MongoDB를 이용하여 로그인 및 게시판 기능 등이 구현된 간단한 구직 사이트',
        extra: '#React #Redux #Node.js #Express.js #MongoDB',
    },
    {
        title: 'Netflix Project',
        date: 'Nov 2019',
        description:
            'React.js + The Movie Database API를 이용하여 구현된 다양한 영화, TV 프로그램 소개 및 검색 사이트',
        extra: '#React.js',
    },
    {
        title: 'Social_login Project',
        date: 'Oct 2019',
        description:
            'MongoDB + Express.js + Node.js를 이용하여 facebook, google 로그인 기능이 추가된 프로젝트',
        extra: '#Node.js #Express.js #MongoDB',
    },
    {
        title: 'Shopping_mall Project',
        date: 'Aug 2019 ~ Sep 2019',
        description:
            'MongoDB + Express.js + Node.js를 이용하여 회원가입, 로그인, 상품 등록/제거, 게시판 글 작성/삭제, 좋아요/싫어요 기능을 추가한 프로젝트',
        extra: '#Node.js #Express.js #MongoDB',
    },
];

const sidebar = {
    contact: [
        { name: 'GitHub', icon: GitHubIcon },
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
                        <Main title="Skills" />
                    </Grid>
                    <Typography variant="subtitle1" paragraph>
                        <div>Language: JavaScript(Intermediate), C(Intermediate), Java(Basic), Python(Basic)</div>
                        <div>Web Skills: HTML(Intermediate), CSS(Intermediate), JavaScript(Intermediate)</div>
                        <div>FrameWork: React.js(Intermediate), Node.js(Intermediate)</div>
                        <div>DataBase: MongoDB(Basic)</div>
                    </Typography>
                    <Grid container spacing={5} gutterBottom className={classes.sidebarSection}>
                        <Sidebar
                            contact={sidebar.contact}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer title="Portfolio" description="Write something in Develop blog" />
        </React.Fragment>
    );
}