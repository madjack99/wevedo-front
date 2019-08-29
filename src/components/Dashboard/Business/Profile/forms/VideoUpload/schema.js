import * as Yup from 'yup';

const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/;

export default Yup.object().shape({
  profileVideoURL: Yup.string().matches(youtubeLinkRegex, 'enter youtube link'),
});
