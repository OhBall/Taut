# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  img_url         :string           not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true
  validates :session_token, presence: true, uniqueness:true
  validates :password_digest, presence: true
  validates :img_url, presence: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_user_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    return nil
  end

  def reset_session_token
    self.session_token = generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token = self.session_token || User.generate_session_token
  end

  private
  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end
end
