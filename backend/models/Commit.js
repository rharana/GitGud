module.exports = (sequelize, DataTypes) => {
    const Commit = sequelize.define('Commit', {
      id: {
        id: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      title: DataTypes.STRING,
      message: DataTypes.STRING,
      author_name: DataTypes.STRING,
      authored_date: DataTypes.STRING,
      commiter_name: DataTypes.STRING,
      commited_date: DataTypes.STRING,
      url: DataTypes.STRING
    });
  
    Commit.associate = models => {
        Commit.hasOne(models.Repository);
    };
  
    return Commit;
}