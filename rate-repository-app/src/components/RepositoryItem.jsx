import React from 'react';
import { View, StyleSheet, Image, Text as RNText } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
    color: theme.colors.textSecondary,
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: theme.fontWeights.bold,
  },
});

const formatCount = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
};

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={styles.row}>
    <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
    <View style={styles.info}>
      <RNText style={styles.name}>{fullName}</RNText>
      <RNText style={styles.description}>{description}</RNText>
      <RNText style={styles.languageTag}>{language}</RNText>
    </View>
  </View>
);

const RepositoryStats = ({ stars, forks, reviews, rating }) => (
  <View style={styles.statsRow}>
    <View style={styles.statItem}>
      <RNText style={styles.statValue}>{formatCount(stars)}</RNText>
      <RNText>Stars</RNText>
    </View>
    <View style={styles.statItem}>
      <RNText style={styles.statValue}>{formatCount(forks)}</RNText>
      <RNText>Forks</RNText>
    </View>
    <View style={styles.statItem}>
      <RNText style={styles.statValue}>{reviews}</RNText>
      <RNText>Reviews</RNText>
    </View>
    <View style={styles.statItem}>
      <RNText style={styles.statValue}>{rating}</RNText>
      <RNText>Rating</RNText>
    </View>
  </View>
);

const RepositoryItem = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => (
  <View style={styles.container}>
    <RepositoryItemHeader
      ownerAvatarUrl={ownerAvatarUrl}
      fullName={fullName}
      description={description}
      language={language}
    />
    <RepositoryStats
      stars={stargazersCount}
      forks={forksCount}
      reviews={reviewCount}
      rating={ratingAverage}
    />
  </View>
);

export default RepositoryItem;
