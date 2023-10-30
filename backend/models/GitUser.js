module.exports = (sequelize, DataTypes) => {
  const GitUser = sequelize.define('GitUser', {
    id: {
      id: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    username: DataTypes.STRING,
    avatar_url: DataTypes.STRING
  });

  GitUser.associate = models => {
    GitUser.hasMany(models.Repository);
  };

  return Commit;
}