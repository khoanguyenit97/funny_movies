user = User.create(username: "Khoa Nguyen", password: "password")
movie = Movie.create(url:"https://www.youtube.com/watch?v=heVMX8KSU4c")
UserMovie.create(user_id: user.id, movie_id: movie.id)