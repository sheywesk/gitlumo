import React, {useEffect, useState} from 'react';
import {
  PerfilRender,
  Container,
  Image,
  Info,
  InfoSubtitle,
  Social,
  InfoTitle,
  Repository,
  ActiviView,
  SocialPerfil,
  Header,
  InfoPerfil,
  InfoSocial,
} from './styles';
import {CollapsibleHeaderScrollView} from 'react-native-collapsible-header-views';
import api from '../../services/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Snackbar, ActivityIndicator} from 'react-native-paper';

import {View, Platform, FlatList} from 'react-native';

// const data = [
//   {
//     id: 238931107,
//     node_id: 'MDEwOlJlcG9zaXRvcnkyMzg5MzExMDc=',
//     name: 'icg',
//     full_name: 'sheywesk/icg',
//     private: false,
//     owner: {
//       login: 'sheywesk',
//       id: 56653781,
//       node_id: 'MDQ6VXNlcjU2NjUzNzgx',
//       avatar_url: 'https://avatars3.githubusercontent.com/u/56653781?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/sheywesk',
//       html_url: 'https://github.com/sheywesk',
//       followers_url: 'https://api.github.com/users/sheywesk/followers',
//       following_url:
//         'https://api.github.com/users/sheywesk/following{/other_user}',
//       gists_url: 'https://api.github.com/users/sheywesk/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/sheywesk/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/sheywesk/subscriptions',
//       organizations_url: 'https://api.github.com/users/sheywesk/orgs',
//       repos_url: 'https://api.github.com/users/sheywesk/repos',
//       events_url: 'https://api.github.com/users/sheywesk/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/sheywesk/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/sheywesk/icg',
//     description: null,
//     fork: false,
//     url: 'https://api.github.com/repos/sheywesk/icg',
//     forks_url: 'https://api.github.com/repos/sheywesk/icg/forks',
//     keys_url: 'https://api.github.com/repos/sheywesk/icg/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/sheywesk/icg/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/sheywesk/icg/teams',
//     hooks_url: 'https://api.github.com/repos/sheywesk/icg/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/sheywesk/icg/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/sheywesk/icg/events',
//     assignees_url: 'https://api.github.com/repos/sheywesk/icg/assignees{/user}',
//     branches_url: 'https://api.github.com/repos/sheywesk/icg/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/sheywesk/icg/tags',
//     blobs_url: 'https://api.github.com/repos/sheywesk/icg/git/blobs{/sha}',
//     git_tags_url: 'https://api.github.com/repos/sheywesk/icg/git/tags{/sha}',
//     git_refs_url: 'https://api.github.com/repos/sheywesk/icg/git/refs{/sha}',
//     trees_url: 'https://api.github.com/repos/sheywesk/icg/git/trees{/sha}',
//     statuses_url: 'https://api.github.com/repos/sheywesk/icg/statuses/{sha}',
//     languages_url: 'https://api.github.com/repos/sheywesk/icg/languages',
//     stargazers_url: 'https://api.github.com/repos/sheywesk/icg/stargazers',
//     contributors_url: 'https://api.github.com/repos/sheywesk/icg/contributors',
//     subscribers_url: 'https://api.github.com/repos/sheywesk/icg/subscribers',
//     subscription_url: 'https://api.github.com/repos/sheywesk/icg/subscription',
//     commits_url: 'https://api.github.com/repos/sheywesk/icg/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/sheywesk/icg/git/commits{/sha}',
//     comments_url: 'https://api.github.com/repos/sheywesk/icg/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/sheywesk/icg/issues/comments{/number}',
//     contents_url: 'https://api.github.com/repos/sheywesk/icg/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/sheywesk/icg/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/sheywesk/icg/merges',
//     archive_url:
//       'https://api.github.com/repos/sheywesk/icg/{archive_format}{/ref}',
//     downloads_url: 'https://api.github.com/repos/sheywesk/icg/downloads',
//     issues_url: 'https://api.github.com/repos/sheywesk/icg/issues{/number}',
//     pulls_url: 'https://api.github.com/repos/sheywesk/icg/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/sheywesk/icg/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/sheywesk/icg/notifications{?since,all,participating}',
//     labels_url: 'https://api.github.com/repos/sheywesk/icg/labels{/name}',
//     releases_url: 'https://api.github.com/repos/sheywesk/icg/releases{/id}',
//     deployments_url: 'https://api.github.com/repos/sheywesk/icg/deployments',
//     created_at: '2020-02-07T13:32:21Z',
//     updated_at: '2020-02-28T13:07:45Z',
//     pushed_at: '2020-02-28T13:07:43Z',
//     git_url: 'git://github.com/sheywesk/icg.git',
//     ssh_url: 'git@github.com:sheywesk/icg.git',
//     clone_url: 'https://github.com/sheywesk/icg.git',
//     svn_url: 'https://github.com/sheywesk/icg',
//     homepage: null,
//     size: 46049,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'C',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'master',
//   },
//   {
//     id: 215790507,
//     node_id: 'MDEwOlJlcG9zaXRvcnkyMTU3OTA1MDc=',
//     name: 'louvor-ibnv',
//     full_name: 'sheywesk/louvor-ibnv',
//     private: false,
//     owner: {
//       login: 'sheywesk',
//       id: 56653781,
//       node_id: 'MDQ6VXNlcjU2NjUzNzgx',
//       avatar_url: 'https://avatars3.githubusercontent.com/u/56653781?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/sheywesk',
//       html_url: 'https://github.com/sheywesk',
//       followers_url: 'https://api.github.com/users/sheywesk/followers',
//       following_url:
//         'https://api.github.com/users/sheywesk/following{/other_user}',
//       gists_url: 'https://api.github.com/users/sheywesk/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/sheywesk/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/sheywesk/subscriptions',
//       organizations_url: 'https://api.github.com/users/sheywesk/orgs',
//       repos_url: 'https://api.github.com/users/sheywesk/repos',
//       events_url: 'https://api.github.com/users/sheywesk/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/sheywesk/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/sheywesk/louvor-ibnv',
//     description: 'Aplicação mobile desenvolvida em flutter.',
//     fork: false,
//     url: 'https://api.github.com/repos/sheywesk/louvor-ibnv',
//     forks_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/forks',
//     keys_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/teams',
//     hooks_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/events',
//     assignees_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/tags',
//     blobs_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/languages',
//     stargazers_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/subscription',
//     commits_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/sheywesk/louvor-ibnv/merges',
//     archive_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/downloads',
//     issues_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/sheywesk/louvor-ibnv/deployments',
//     created_at: '2019-10-17T12:46:10Z',
//     updated_at: '2020-02-14T12:34:54Z',
//     pushed_at: '2020-02-14T12:34:52Z',
//     git_url: 'git://github.com/sheywesk/louvor-ibnv.git',
//     ssh_url: 'git@github.com:sheywesk/louvor-ibnv.git',
//     clone_url: 'https://github.com/sheywesk/louvor-ibnv.git',
//     svn_url: 'https://github.com/sheywesk/louvor-ibnv',
//     homepage: '',
//     size: 317,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: 'Dart',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'master',
//   },
//   {
//     id: 215669565,
//     node_id: 'MDEwOlJlcG9zaXRvcnkyMTU2Njk1NjU=',
//     name: 'spotify-clone',
//     full_name: 'sheywesk/spotify-clone',
//     private: false,
//     owner: {
//       login: 'sheywesk',
//       id: 56653781,
//       node_id: 'MDQ6VXNlcjU2NjUzNzgx',
//       avatar_url: 'https://avatars3.githubusercontent.com/u/56653781?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/sheywesk',
//       html_url: 'https://github.com/sheywesk',
//       followers_url: 'https://api.github.com/users/sheywesk/followers',
//       following_url:
//         'https://api.github.com/users/sheywesk/following{/other_user}',
//       gists_url: 'https://api.github.com/users/sheywesk/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/sheywesk/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/sheywesk/subscriptions',
//       organizations_url: 'https://api.github.com/users/sheywesk/orgs',
//       repos_url: 'https://api.github.com/users/sheywesk/repos',
//       events_url: 'https://api.github.com/users/sheywesk/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/sheywesk/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/sheywesk/spotify-clone',
//     description: 'Clone do spotify web desenvolvido com Reactjs.',
//     fork: false,
//     url: 'https://api.github.com/repos/sheywesk/spotify-clone',
//     forks_url: 'https://api.github.com/repos/sheywesk/spotify-clone/forks',
//     keys_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/sheywesk/spotify-clone/teams',
//     hooks_url: 'https://api.github.com/repos/sheywesk/spotify-clone/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/sheywesk/spotify-clone/events',
//     assignees_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/sheywesk/spotify-clone/tags',
//     blobs_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/languages',
//     stargazers_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/subscription',
//     commits_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/sheywesk/spotify-clone/merges',
//     archive_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/downloads',
//     issues_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/sheywesk/spotify-clone/deployments',
//     created_at: '2019-10-17T00:29:25Z',
//     updated_at: '2020-02-14T01:54:45Z',
//     pushed_at: '2019-11-08T12:14:58Z',
//     git_url: 'git://github.com/sheywesk/spotify-clone.git',
//     ssh_url: 'git@github.com:sheywesk/spotify-clone.git',
//     clone_url: 'https://github.com/sheywesk/spotify-clone.git',
//     svn_url: 'https://github.com/sheywesk/spotify-clone',
//     homepage: '',
//     size: 2,
//     stargazers_count: 0,
//     watchers_count: 0,
//     language: null,
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     forks_count: 0,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 0,
//     license: null,
//     forks: 0,
//     open_issues: 0,
//     watchers: 0,
//     default_branch: 'master',
//   },
// ];

function RenderHeader({user}) {
  const {login, bio, company, followers, following, public_repos} = user;
  var biografia;
  bio == null
    ? (biografia = 'Usuário Não Possui Biografia.')
    : (biografia = bio);
  return (
    <Header>
      <Image
        source={{
          uri: user.avatar_url,
        }}
      />
      <InfoPerfil>
        <InfoTitle>{login}</InfoTitle>
        <InfoSubtitle>{biografia}</InfoSubtitle>
        <InfoSubtitle>{company}</InfoSubtitle>
      </InfoPerfil>
      <SocialPerfil>
        <InfoSocial>
          <InfoTitle>Seguidores</InfoTitle>
          <InfoSubtitle>{followers}</InfoSubtitle>
        </InfoSocial>
        <InfoSocial>
          <InfoTitle>Repos</InfoTitle>
          <InfoSubtitle>{public_repos}</InfoSubtitle>
        </InfoSocial>
        <InfoSocial>
          <InfoTitle>Seguindo</InfoTitle>
          <InfoSubtitle>{following}</InfoSubtitle>
        </InfoSocial>
      </SocialPerfil>
    </Header>
  );
}
function RenderRepositories({repository}) {
  const {fork, full_name, description, language, updated_at} = repository;
  var dsctn;
  var fk;
  fork === true ? (fk = 'Fork') : (fk = 'Repositório Próprio');
  description == null ? (dsctn = 'Sem Descrição') : (dsctn = description);

  var update = `Última atualização:${updated_at[8]}${updated_at[9]}/${updated_at[5]}${updated_at[6]}/${updated_at[2]}${updated_at[3]}`;
  var repo = [dsctn, update, language, fk];

  return (
    <Repository>
      <Info>
        <InfoTitle>{full_name}</InfoTitle>
        {repo.map((element, index) => {
          return element !== null ? (
            <InfoSubtitle key={index}>{element}</InfoSubtitle>
          ) : null;
        })}
      </Info>
      <Social>
        <Info>
          <Icon name="star" size={12} />
          <InfoSubtitle>{repository.stargazers_count}</InfoSubtitle>
        </Info>
        <Info>
          <Icon name="code-fork" size={12} />
          <InfoSubtitle>{repository.forks_count}</InfoSubtitle>
        </Info>
        <Info>
          <Icon name="eye" size={12} />
          <InfoSubtitle>{repository.watchers_count}</InfoSubtitle>
        </Info>
      </Social>
    </Repository>
  );
}

export default function Perfil({navigation}) {
  const [data, setData] = useState();
  const [mount, setMount] = useState(true);
  const [loading, setLoading] = useState(true);
  const [perfil, setPerfil] = useState();
  const [checked, setChecked] = useState(false);
  const user = navigation.getParam('item');

  useEffect(() => {
    if (mount) {
      async function fecthData() {
        await loadRepositories();
        await loadPerfil();
        //await loadLanguages();
      }
      fecthData();
      setMount(false);
    }
    return () => null;
  });
  async function loadPerfil() {
    const {data} = await api.get(`/users/${user.login}`);

    setPerfil(data);
    setLoading(false);
    setChecked(true);
  }

  async function loadLanguages() {
    const language = await api.get(`/repos/${data.full_name}/languages `);
    console.log(language);
  }
  async function loadRepositories() {
    const {data} = await api.get(`/users/${user.login}/repos`);

    setData(data);
  }

  return (
    <Container>
      {loading && !checked ? (
        <ActiviView>
          <ActivityIndicator size="large" color="#ffebee" />
        </ActiviView>
      ) : (
        <PerfilRender
          data={data}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({item}) => <RenderRepositories repository={item} />}
          ListHeaderComponent={<RenderHeader user={perfil} />}
        />
      )}
    </Container>
  );
}
