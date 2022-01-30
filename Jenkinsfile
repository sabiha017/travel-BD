pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('sabiha-dockerhub')
	}

	stages {
	    
        stage('Test') {
            steps {
			    sh 'npm test'
			}
		}

		stage('Build') {
            steps {
			    sh 'docker build -t fatemasabiha/travel-bd-react-app:latest .'
			}
		}

		stage('Deploy') {
            steps {
			    script {
                     def imageExists = sh(script: "docker images -q travel-bd-app", returnStdout: true) == 0

                        if(imageExists){
                           sh 'docker stop travel-bd-app'
			               sh 'docker rm travel-bd-app' 
                         }
                        }
			    sh 'docker run -it -d -p 80:80  --name travel-bd-app fatemasabiha/travel-bd-react-app'
			}
		}

		stage('Push to Dockerhub') {

			steps {
			    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
				sh 'docker push fatemasabiha/travel-bd-react-app:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}