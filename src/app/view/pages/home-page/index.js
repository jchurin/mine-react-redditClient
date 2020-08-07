import React from 'react';
import { injectReducer } from '@rc-redux';
import { useSelector } from 'react-redux';
import entryListReducer from './data/entry-list/reducer';
import entryDetailsReducer from './data/entry-details/reducer';
import { KEY_ENTRY_LIST, KEY_ENTRY_DETAILS } from '../../../data/constants';
import EntryList from './components/entry-list';

const HomePage = () => {
  injectReducer(KEY_ENTRY_LIST, entryListReducer);
  injectReducer(KEY_ENTRY_DETAILS, entryDetailsReducer);

  const list = useSelector((state) => state[KEY_ENTRY_LIST]);
  const details = useSelector((state) => state[KEY_ENTRY_DETAILS]);

  console.log(list, details);

  const posts = [
    {
      title: 'Title 1 of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title 2 of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title 3 of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title 4 of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imgText: 'main image description',
    },
  ];

  return (
    <>
      <EntryList posts={posts} />
    </>
  );
};

export default HomePage;
